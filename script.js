document.addEventListener('DOMContentLoaded', function () {
    var todoInput = document.getElementById('task-input');
    var addBtn = document.getElementById('add-task-btn');
    var todoList = document.getElementById('task-list');
    var clearAllBtn = document.getElementById('clear-all-btn');
  
    var isEditing = false; 
    var currentTask; 
  
   
    addBtn.addEventListener('click', function () {
      var task = todoInput.value.trim();
      if (task === '') {
        alert('Please enter a task!');
        return;
      }
  
      if (isEditing) {
     
        currentTask.querySelector('span').textContent = task;
        addBtn.textContent = 'Add'; 
        isEditing = false;
        todoInput.value = '';
        currentTask = null;
      } else {
      
        var li = document.createElement('li');
 
        var taskText = document.createElement('span');
        taskText.textContent = task;
        li.appendChild(taskText);
  
        var editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<i class="fa fa-edit"></i>'; 
        li.appendChild(editBtn);
  

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn'; 
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>'; 
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
  
        
        editBtn.addEventListener('click', function () {
          todoInput.value = taskText.textContent; 
          addBtn.textContent = 'Update';
          isEditing = true; 
          currentTask = li; 
        });
  
     
        deleteBtn.addEventListener('click', function () {
          todoList.removeChild(li);
          if (todoList.children.length === 0) {
            clearAllBtn.style.display = 'none'; 
          }
        });
  
        clearAllBtn.style.display = 'block';
  
       
        todoInput.value = '';
      }
    });
  

    clearAllBtn.addEventListener('click', function () {
      if (confirm('Are you sure you want to delete all tasks?')) {
        todoList.innerHTML = '';
        clearAllBtn.style.display = 'none'; 
      }
    });
  });
  