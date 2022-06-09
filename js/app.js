let count=0;
const input=document.querySelector('input[type="text"]');


dtform.addEventListener('submit',(e)=>{
    e.preventDefault();
    addlisck();
})

let addlisck=()=>{
    count++;
    newtext=input.value;
    list.innerHTML +=
    `<div class="col-12 md-12 lg-12 task_container" id="${count}">
       <label for="">
         <input type="checkbox">
           ${newtext}
         </label>
    <img src="img/iconos/delete.png" class="closebtn">
 </div>`
 input.value="";
 updatechek();
}

list.addEventListener('click',(event)=>{
  if(event.srcElement.nodeName == "INPUT"){
     
  }; 
})
let updatechek=()=>{
  let pend=list.querySelectorAll('div');
  let comp=list.querySelectorAll('input[type="checkbox"]:checked');
  stars.innerHTML+=`<p>tareas pendientes : ${pend.length} completadas: ${comp.length}</p>`
}

