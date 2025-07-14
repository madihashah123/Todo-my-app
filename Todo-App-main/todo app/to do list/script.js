let listContainer = document.getElementById('List-container')
let inputBox= document.getElementById('input-box')
function addTask(){
if(inputBox.value=== ''){
alert('Add Your Task')

}
else{
    let task = document.createElement('li')
task.textContent=inputBox.value
listContainer.appendChild(task)
let span = document.createElement('span');
    span.textContent='\u00d7';
    task.appendChild(span)
}

inputBox.value = ''
savedata()
}
listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked')
        savedata()
    }
   else if(el.target.tagName == 'SPAN'){
    el.target.parentElement.remove()
    savedata()
}

})
function savedata(){
localStorage.setItem("tasks",listContainer.innerHTML)

}
function showdata(){
listContainer.innerHTML = localStorage.getItem('tasks')
}
showdata()