let CategoryHeader=document.querySelectorAll('.category-header.clickable');
let TaskForms=document.querySelectorAll('.newTask');

function findCategory(event) {
    const clickedHeader = event.currentTarget; 
  
   
 let arrowchange=clickedHeader.querySelector('.arrow');

if (arrowchange.textContent === "▶") {
    arrowchange.textContent = "▼";
} else {
    arrowchange.textContent = "▶";
};
let AllCategories=clickedHeader.closest('.category');
let CategoryTasks=AllCategories.querySelector('.tasks');
let CategoryForm = AllCategories.querySelector('.newTask');
CategoryTasks.classList.toggle('hidden');
CategoryForm.classList.toggle('hidden');

};

CategoryHeader.forEach(function(header) {
    header.addEventListener('click', findCategory);
});

TaskForms.forEach(function(form) {
    form.addEventListener('submit',AddNewTask);
});


function AddNewTask(event) {
    event.preventDefault();
  let ClickedForm=event.currentTarget;
  let AllCategories = ClickedForm.closest('.category');
  let InputForm=AllCategories.querySelector(' input');
  let TasksToDo=AllCategories.querySelector('.task-list');
  let Counter=AllCategories.querySelector('.task-count');

  let taskText = InputForm.value;
  if (taskText.trim() !== '') {
  let newTask=document.createElement('li');
  let newSpan=document.createElement('span');
  let newIcon=document.createElement('button');
  newIcon.classList.add('.delete-btn');
newSpan.textContent=taskText;
newIcon.textContent="🗑️";
newIcon.addEventListener('click', DeleteTask); 
newTask.appendChild(newSpan);
newTask.appendChild(newIcon);
  TasksToDo.append(newTask);
  

InputForm.value = "";

  let currentCount = parseInt(Counter.textContent);
  currentCount += 1;
  Counter.textContent = currentCount;
};
};

let ClickedIcon=document.querySelectorAll('.delete-btn');

ClickedIcon.forEach(function(button){
    button.addEventListener('click',DeleteTask)

});

function DeleteTask(event) {
 const clickedIcon = event.currentTarget; 
 let DeletedTask=clickedIcon.closest('li');
 let AllCategories = clickedIcon.closest('.category');
 let TaskCounter=AllCategories.querySelector('.task-count');
 DeletedTask.remove();
let currentCount = Number(TaskCounter.textContent);
TaskCounter.textContent = currentCount - 1;
};

let AllTasks=document.querySelectorAll('li');
AllTasks.forEach(function(task) {
    task.addEventListener('dblclick', RedactingTask);
});

function RedactingTask(event){

    let ClickedTask=event.currentTarget;
    const TaskElement=ClickedTask.querySelector('span');
    const deleteBtn = ClickedTask.querySelector('.delete-btn');

    const taskText = TaskElement.textContent;  // сохраняем текст отдельно

    const input=document.createElement('input');
    input.type="text";
    input.value=taskText;

    TaskElement.innerHTML="";
     TaskElement.appendChild(input);
     TaskElement.appendChild(deleteBtn);

    input.focus();
    input.select();

     input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
    saveEdit();
    };

if (e.key === 'Escape') {
    cancelEdit();  // функция отмены
};

    });

    function saveEdit(){
let newText=input.value;
TaskElement.textContent = newText;

input.replaceWith(TaskElement);
ClickedTask.appendChild(deleteBtn); 
    };

  function cancelEdit() {


input.replaceWith(taskText);
ClickedTask.appendChild(deleteBtn); 
  }  
    };

   
