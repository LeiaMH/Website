//On load check local storage and set element class to saved class. 
const elementToToggle = document.getElementById("name");
let currentToggleClass = elementToToggle.classList;
let storedToggleClass = localStorage.getItem('toggleStatus');

function setToStoredToggleClass() {
   if (storedToggleClass === 'offstyle') {
      elementToToggle.className = 'offstyle';
   } else if (storedToggleClass === 'onstyle') {
      elementToToggle.className = 'onstyle'
   };
};

//On click toggle light-on/light-off on element.
elementToToggle.addEventListener('click', function() {
   if (currentToggleClass == 'offstyle') {
      elementToToggle.className = 'onstyle';
   } else if (currentToggleClass == 'onstyle') {
      elementToToggle.className = 'offstyle';
   };

   // Update toggleStatus.
   let newClass = elementToToggle.className;
   localStorage.setItem('toggleStatus', newClass);
})

//Contact section toggle.
function toggleContacts(){
   document.getElementById('footer').classList.toggle("active");
}