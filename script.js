let slide1 = document.querySelector(".todo-list");
let slide2 = document.querySelector(".notes-list");
let slideBtn = document.querySelector("#slide");
let add = document.querySelector('.add');
let data = document.querySelector('.task');
let todo = document.querySelector('#add-todo');
let note = document.querySelector('#add-note');
//logic to slide to-do and notes section
slideBtn.addEventListener("click",(a) =>{
    console.log(a);
    if(slideBtn.checked){
        slide1.style.left = '-100%';
        slide2.style.right = '0%';
      }
      else{
        slide1.style.left = '0%';
        slide2.style.right = '-100%';
      }
    }
)
//Logic to add item in to-do
function addTodo(){
    let a = 0;//variable for using edit button 
    const item = document.createElement("div")
    item.classList.add('item');
    item.innerHTML=`
    <i class="delet fa-solid fa-trash"></i>
    <i class="cut fa-solid fa-rectangle-xmark"></i>
    <input id="add-todo" type="text" value="${data.value}" readonly>
    <i class="edit fa-solid fa-pen-to-square"></i>
    <i class="done fa-solid fa-circle-check"></i>
    `;
    slide1.appendChild(item);
    data.value='';
    //Code for delet button
    item.querySelector('.delet').addEventListener("click",() =>{
        item.remove();
    })
    //code for cut button 
    item.querySelector('.cut').addEventListener("click",() =>{
        item.querySelector('#add-todo').style.cssText = 
        `
         text-decoration:line-through;
         color:red;
        `;
    })
    //code for edit button
    item.querySelector('.edit').addEventListener("click",() =>{
        if(a%2==0){ 
            a++;
            item.querySelector('#add-todo').removeAttribute('readonly');
            item.querySelector('#add-todo').focus();
            item.querySelector('.edit').classList.add("fa-floppy-disk");
            console.log("on");
           
        }
        else {
            console.log('off');
            let delet = "fa-pen-to-square"
            item.querySelector('#add-todo').setAttribute('readonly','readonly');
            item.querySelector('.edit').classList.remove("fa-floppy-disk");
            a++;
        } 

    })
    //code for done button
    item.querySelector('.done').addEventListener("click",() =>{
        item.querySelector('#add-todo').style.cssText = 
        `
         color:rgb(0, 204, 0);
         border: 2px solid rgb(0, 102, 0);
         outline:none;
        `;
    })
}
//Logic to add item in notes
function addNote(){
    let a = 0;
    const item = document.createElement("div")
    item.classList.add('item');
    item.innerHTML=`
    <i class="delet fa-solid fa-trash"></i>
    <textarea id="add-note" readonly >${data.value}</textarea>
    <i class="edit fa-solid fa-pen-to-square"></i>
    `;
    slide2.appendChild(item);
    data.value='';
    //code for delet button
    item.querySelector('.delet').addEventListener("click",() =>{
        item.remove();
    })
    //code for edit button
    item.querySelector('.edit').addEventListener("click",() =>{
        if(a%2==0){ 
            a++;
            item.querySelector('#add-note').removeAttribute('readonly');
            item.querySelector('#add-note').focus();
            item.querySelector('.edit').classList.add("fa-floppy-disk");
            console.log("on");
           
        }
        else {
            console.log("off");
            item.querySelector('#add-note').setAttribute('readonly','readonly');
            item.querySelector('.edit').classList.remove("fa-floppy-disk");
            a++;
        } 

    })
}
//logic to find item is note or to-do 
add.addEventListener("click",() => {
    if(data.value!='')
        if(slideBtn.checked){
             addNote();
        }
         else{
            addTodo();
        }
    else {
        data.focus();
        alert("Write something.");
    }
})
