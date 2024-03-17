let slide1 = document.querySelector(".todo-list");
let slide2 = document.querySelector(".notes-list");
let slideBtn = document.querySelector("#slide");
let add = document.querySelector('.add');
let data = document.querySelector('.task');
let todo = document.querySelector('#add-todo');
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


//logic to cheack input have a content or not
add.addEventListener("click",() => {
    if(data.value!='')
        addTodo();
    else {
        data.focus();
        alert("Write something.");
    }
})

//Logic to add item in notes

let add_note = document.querySelector(".add-note");
let title = document.querySelector("#note-title");
let note = document.querySelector("#note");
let box = document.querySelector(".note-box");
let edit = document.querySelector(".edit-note");
let delet = document.querySelector(".delet-note");
let close = document.querySelector(".close-note");
let noteContainer = document.querySelector(".notes-container");
let noteSlide = document.querySelector(".note-slide");
function hide(item){
    item.querySelector('.visi-slide').classList.add('note-slide');
    item.querySelector('.note-slide').classList.remove('visi-slide');
    console.log('close');
}
function addNote() {
    let a = 1;
    const item = document.createElement("div")
    item.classList.add('note-box');
    item.innerHTML=`
    <div class="main-block">
        <h4>Title</h4>
        <p class="title">CLICK HERE TO VIEW OR EDIT NOTE</p>
    </div>
    <div class="note-slide">
        <div class="slide-title">
            <input type="text" id="note-title" placeholder="Write the title here" readonly>
            <div class="title-opt">
                <i class="fa-solid fa-pen-to-square edit-note"></i>
                <i class="fa-solid fa-trash delet-note"></i>
                <i class="fa-solid fa-circle-xmark close-note"></i>
            </div>
        </div>
        <hr />
        <div class="slide-data">
            <textarea name="note" id="note"  placeholder="Desribe the title"  readonly></textarea>
        </div>
    </div>
    `;
    noteContainer.prepend(item);
    item.querySelector('.note-slide').classList.add('visi-slide');
    item.querySelector('.visi-slide').classList.remove('note-slide');
    item.querySelector('#note-title').removeAttribute('readonly');
    item.querySelector('#note').removeAttribute('readonly');
    item.querySelector('#note-title').focus();
    item.querySelector('.edit-note').classList.add("fa-floppy-disk");
    item.querySelector('.main-block').addEventListener('click',()=>{
        item.querySelector('.note-slide').classList.add('visi-slide');
        item.querySelector('.visi-slide').classList.remove('note-slide');
        
    });

    item.querySelector('.close-note').addEventListener('click',()=>{
    hide(item);
    });

    item.querySelector('.delet-note').addEventListener('click',()=>{
        item.remove();
    });

    item.querySelector('.edit-note').addEventListener("click",() =>{
        if(a%2==0){ 
            a++;
            item.querySelector('#note-title').removeAttribute('readonly');
            item.querySelector('#note').removeAttribute('readonly');
            item.querySelector('#note-title').focus();
            item.querySelector('.edit-note').classList.add("fa-floppy-disk");
            console.log("on");
           
        }
        else {
            console.log("off");
            item.querySelector('#note-title').setAttribute('readonly','readonly');
            item.querySelector('#note').setAttribute('readonly','readonly');
            item.querySelector('.edit-note').classList.remove("fa-floppy-disk");
            a++;
            let data = item.querySelector('#note-title').value; 
            item.querySelector('.title').textContent= data;
            
        } 
    })
}

add_note.addEventListener("click", () => {
    addNote();
})
