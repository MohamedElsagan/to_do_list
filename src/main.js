// curd
var txt = document.getElementById('txt');
var submit = document.getElementById('submit');
var priint = document.getElementById('priint');
var container = document.querySelector('.container') ;
var show_all_tasks = document.querySelector('.show_all_tasks') ;
var all_tasks=[];


submit.onclick = function(){
    create_task();
    clear_inputs();
    read();
}



// save localstorage
if(localStorage.tasks != null){
    all_tasks = JSON.parse(localStorage.tasks);
}
else{
    all_tasks = [];
}



// create
function create_task(){
    var task = {
        task:txt.value
    }
    if(txt.value.trim() !=''){
        all_tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(all_tasks));
        console.log(all_tasks);
        
    }

}

// clear inputs
function clear_inputs(){
    txt.value = '';
}

// read - show
function read(){
    var div = '';
    for(var i = 0 ; i < all_tasks.length ; i++){
        div +=`
            <div class="task">
            <button class="x"  id="${i}" onclick="delete_one(this)">x</button>
            <input type="text" name="" id="" value="${all_tasks[i].task}">
            </div>
            `
    }
    document.getElementById('tasks').innerHTML = div;
}
read();


// delete
function delete_one(dele){
    let z = document.getElementById(dele.id);
    console.log(z.id);
    all_tasks.splice(z.id,1);
    localStorage.tasks = JSON.stringify(all_tasks);
    read();
}





