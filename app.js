let addBtn = document.querySelector('.add-btn');
let input = document.querySelector('.input');
let output = document.querySelector('.output-list');
let feedback = document.querySelector('.feedback');
let user = [];
if(typeof(storage)!== "undefined"){
    let user1 = JSON.parse(localStorage.user1)
    for(let users of user){
        let listElement = document.createElement('li');
        listElement.classList.add('list-item')
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-list')
        deleteBtn.innerHTML = 'Delete'
        let contentList = document.createElement('span');
        contentList.classList.add('content-list');
        contentList.innerHTML = user[users].key;
        listElement.appendChild(contentList);
        listElement.appendChild(deleteBtn);
        output.appendChild(listElement);
    }
}

addBtn.addEventListener('click',()=>{
    if(input.value == ''){
        feedback.innerHTML = 'Please Write Task';
        setTimeout(()=>{
            feedback.innerHTML = '';
        },2000)
    }
    if(typeof(Storage)!== "undefined"){
        let listElement = document.createElement('li');
        listElement.classList.add('list-item')
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-list')
        deleteBtn.innerHTML = 'Delete'
        let contentList = document.createElement('span');
        contentList.classList.add('content-list');
        contentList.innerHTML = input.value;
        user.push({'key': input.value})
        localStorage.user = JSON.stringify(user);
        listElement.appendChild(contentList);
        listElement.appendChild(deleteBtn);
        output.appendChild(listElement);
    }
    input.value = "";
})
let deleteBtns = document.querySelectorAll('.delete-list');

output.addEventListener('click',(e)=>{
let item = e.target;
if(item.classList[0] === 'delete-list'){
    let todo = item.parentElement;
    todo.remove()
}
})