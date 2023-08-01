let tasktobeadded = document.querySelector("input");
let sub = document.querySelector("#submit");
let task = document.querySelector(".task");
let del = document.querySelectorAll(".delete");

sub.addEventListener("click", function(){
    // console.log("submitted");
    let newtask = document.createElement("div");
    newtask.classList.add("taskname");
    newtask.innerText=tasktobeadded.value;

    let newbutton = document.createElement("button");

    newbutton.innerText="Delete Task";
    newbutton.classList.add("delete");
    if(newtask.innerText!=""){
        task.append(newtask);
        newtask.append(newbutton);
        tasktobeadded.value="";
    }
    else alert("Empty Task!!");
})

// for(dlt of del){
//     dlt.addEventListener("click",function(){
//         this.parentElement.remove();
//     })
// }

task.addEventListener("click",function(event){
    // console.log(this.children);
    // console.dir(event.target);
    // console.log(event.target);

    // console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
    
})

tasktobeadded.addEventListener("keypress",function(event){
    let eventkey = event.key;
    let eventcode= event.code;
    // console.log(eventkey);
    // console.log(eventcode);
//    console.log(this.value);
    if(eventkey=="Enter"){ 
    
        if (this.value!=""){
            let newtask = document.createElement("div");
    newtask.classList.add("taskname");
    newtask.innerText=tasktobeadded.value;
    task.append(newtask);
        tasktobeadded.value="";
        let newbutton = document.createElement("button");
        newbutton.innerText="Delete Task";
    newbutton.classList.add("delete");
    newtask.append(newbutton);
        }
        else alert("Empty Task!!");
}
    
})

// sub.addEventListener("clicked", function(){
//     console.log("form submitted");
//     console.log(tasktobeadded.value);

//     let newtask = document.createElement("div");

//     newtask.classList.add("taskname");
//     newtask.innerText = tasktobeadded.value;

//     task.append(newtask);
//     tasktobeadded.value = "";
    
// })

// del.addEventListener("clicked",function(event){
//     console.log("delte was clicked")
//     task.removeChild(task.lastChild);
// })

