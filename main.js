//1. Check local storage and set class to saved status. 
let elementToToggle = document.getElementById("name");
let currentToggleClass = elementToToggle.classList;
let storedToggleClass = localStorage.getItem('toggleStatus');

function setToStoredToggleClass() {
   if (storedToggleClass == 'offstyle') {
      elementToToggle.className = 'offstyle';
   } else if (storedToggleClass == 'onstyle') {
      elementToToggle.className = 'onstyle'
   };
};

//2. On click run lightToggle().
elementToToggle.addEventListener('click', function() {
   if (currentToggleClass == 'offstyle') {
      elementToToggle.className = 'onstyle';
   } else if (currentToggleClass == 'onstyle') {
      elementToToggle.className = 'offstyle';
   };

   //3. Update toggleStatus.
   let newClass = elementToToggle.className;
   localStorage.setItem('toggleStatus', newClass);
})
