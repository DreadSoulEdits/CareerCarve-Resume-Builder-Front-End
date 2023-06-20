const dragArea = document.querySelector('.main');

const checkBoxField = document.getElementById('switch');
const saveButton = document.getElementById('saveBtn');

new Sortable(dragArea, {
    animation: 300
});

checkBoxField.addEventListener('change', () => {
  saveButton.disabled = !checkBoxField.checked; 
});
