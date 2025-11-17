let CategoryHeader=document.querySelectorAll('.category-header.clickable');


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