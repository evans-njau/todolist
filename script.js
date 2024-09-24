const lists = document.querySelector('ul');
const Addsearched = document.querySelector('#add-task');
const searchInput = document.forms['search'].querySelector('input');

///Deleting tasks
lists.addEventListener('click',(e)=>{
   if(e.target.className == 'delete'){
    //the parent of the button
       const li = e.target.parentElement;
       //what to remove
       lists.removeChild(li);
   }
});
//Adding tasks
Addsearched.addEventListener('submit',(e)=>{
   e.preventDefault();
   const input = Addsearched.querySelector("input[type='text']").value;
   const liEl = document.createElement('li');
   const  content = document.createElement('span');
   const Delete = document.createElement('span');
   Delete.textContent = 'Delete';
   content.textContent = input;
   Delete.classList.add('delete');
   content.classList.add('name');
   liEl.append(content);
   liEl.append(Delete);
   lists.append(liEl);
   console.log(liEl);
});
//saerch a task
searchInput.addEventListener('keyup',(e)=>{
   const searched = e.target.value.toLowerCase();
   const tasks = lists.getElementsByTagName('li');
  Array.from(tasks).forEach((task)=>{
    const work = task.firstElementChild.textContent;
    if(work.toLowerCase().indexOf(searched) != -1){
        task.style.display = 'block';
    }else{
        task.style.display = 'none';
    }
   })
})


