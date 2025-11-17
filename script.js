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
};

CategoryHeader.forEach(function(header) {
    header.addEventListener('click', findCategory);
});