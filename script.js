// select items
let inputField = document.querySelector("#input");
let todoAdd = document.querySelector("#todoAdd");
let todoList = document.querySelector(".todoList");

// all Event;
todoAdd.addEventListener("click", newTask);
todoList.addEventListener("click", (e) => {
    operation(e)
})


// add new task
function newTask(e){
    e.preventDefault()
    let inputVal = inputField.value;
    let presentDate = new Date();
    if(inputVal == ""){
        alert("Please Add a Task");
    }else{
        todoList.innerHTML += `<div><p class="listAddtime text-white text-sm font-medium"> <span class= "text-slate-300">Time: ${presentDate.getHours()}:${presentDate.getMinutes()}</span> Date: ${presentDate.getMonth() + 1}/${presentDate.getDate()}/${presentDate.getFullYear()} </p></div>
                <div class="py-2 px-3 flex items-center justify-between bg-slate-500 rounded-sm ">
                        <p class="text-lg w-5/6 break-words text-white para font-medium lineTh" id ="inputVal">${inputVal}</p>
                    <div class="text-white flex items-center text-lg justify-around w-1/4">
                        <i class="fa-solid fa-pen-to-square edit cursor-pointer edits" id="edit" ></i>
                        <i class="fa-solid fa-spinner fa-spin-pulse cursor-pointer" id = "check"></i>
                        <i class="fa-solid fa-trash cursor-pointer removeitem" id="remove"></i>
                    </div>
                </div>`
                
    }
    if(todoList != ""){
        inputField.value = "";
    }
}



// do operation with ele
let operation = (e) => {
    //remove ele
    if(e.target.id == "remove"){
        e.target.parentElement.parentElement.previousElementSibling.remove()
        e.target.parentElement.parentElement.remove();
        
    }
    //edit ele
    else if(e.target.id == "edit"){
        let editVal = e.target.parentElement.parentElement.firstElementChild.innerText;
        inputField.value = editVal;
        let newI = document.createElement("i")
        newI.classList.add("fa-solid", "fa-floppy-disk", "cursor-pointer", "save");
        newI.setAttribute("id", "save");
        e.target.parentElement.firstElementChild.after(newI);
        e.target.parentElement.parentElement.firstElementChild.classList.remove("line-through", "decoration-slate-600", "decoration-2");
    }
    // save ele
    if(e.target.id == "save"){
        if(inputField.value == ""){
            e.target.parentElement.parentElement.firstElementChild.innerText = inputField.value;
            
        }
        e.target.parentElement.parentElement.firstElementChild.innerText = inputField.value;
        if(e.target.parentElement.parentElement.firstElementChild.innerText = inputField.value){
            e.target.parentElement.firstElementChild.nextElementSibling.remove();
        }
        if(todoList != ""){
            inputField.value = "";
        }
    }
    // complete
    if(e.target.id == "check"){
        e.target.parentElement.parentElement.firstElementChild.classList.add("line-through", "decoration-slate-600", "decoration-2");
        e.target.parentElement.firstElementChild.remove();
        e.target.remove();
        
    }
    
};


