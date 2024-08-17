const addTodoBtn=document.querySelector('.add-todo-btn');
const todoInput=document.querySelector('.todo-input');
const todosWrapper=document.querySelector('.todos-wrapper');
let updateBtns=document.querySelectorAll('.update');
let deleteBtns=document.querySelectorAll('.delete');
let todoCount=0;
let editFlag=0;
let editElement;
const addTodo=()=>{
    if(todoInput.value==""){
        alert("enter something");
        return ;
    }
    if(editFlag==1){
        editElement.innerText=todoInput.value;
        editFlag=0;
        todoInput.value="";
    }else{
        const todo=document.createElement('div');
        const todoValue=document.createElement('p');
        todo.setAttribute('class','todo');
        todoValue.setAttribute('class','todo-value');
        todo.setAttribute('name',todoCount);
        todoValue.setAttribute('name',todoCount);

        const updateTodoBtn=document.createElement('button');
        updateTodoBtn.innerText="update";

        const deleteTodoBtn=document.createElement('button');
        deleteTodoBtn.innerText="delete";

        updateTodoBtn.setAttribute('class','update');
        deleteTodoBtn.setAttribute('class','delete');

        updateTodoBtn.setAttribute('name',todoCount);
        deleteTodoBtn.setAttribute('name',todoCount);

        

        todoValue.innerText=todoInput.value;
        todoInput.value='';

        todo.appendChild(todoValue);
        const wrapper=document.createElement('div');
        wrapper.setAttribute('class','wrapper');
        // console.log(updateTodoBtn);
        wrapper.appendChild(updateTodoBtn);
        wrapper.appendChild(deleteTodoBtn);

        todo.appendChild(wrapper);
        todosWrapper.appendChild(todo);
        todoCount+=1;
        
        
    }
    updateBtns=document.querySelectorAll('.update');
    for(updateBtn of updateBtns){

        let name=updateBtn.name;
        updateBtn.addEventListener("click",()=>{updateTodo(name)});
    }
    deleteBtns=document.querySelectorAll('.delete');
    for(deleteBtn of deleteBtns){

        let name=deleteBtn.name;
        deleteBtn.addEventListener("click",()=>{deleteTodo(name)});
    }
}

const updateTodo=(name)=>{
    const Todos=document.querySelectorAll('.todo-value');

    for(let Todo of Todos){
        if(Todo.getAttribute('name')==name){
            const value=Todo.innerText;
            todoInput.value=value;
            editFlag=1;
            editElement=Todo;
        }
    }
}

const deleteTodo=(name)=>{
    const Todos=document.querySelectorAll('.todo');

    for(let Todo of Todos){
        if(Todo.getAttribute('name')==name){
            Todo.remove();
        }
    }
}

addTodoBtn.addEventListener("click",addTodo);

for(updateBtn of updateBtns){

    let name=updateBtn.name;
    updateBtn.addEventListener("click",()=>{updateTodo(name)});
}

for(deleteBtn of deleteBtns){

    let name=deleteBtn.name;
    deleteBtn.addEventListener("click",()=>{deleteTodo(name)});
}

