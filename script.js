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
  newTask.textContent=taskText;
  TasksToDo.append(newTask);
InputForm.value = "";

  let currentCount = parseInt(Counter.textContent);
  currentCount += 1;
  Counter.textContent = currentCount;
};
};