const taskList = [];
// TODO: look up array

function addTask() {

   // TODO: look javascript with the dom(document || javascript with html)
   let taskInput = document.getElementById("taskinput");

   // TODO: look up conditionals if else
   if (taskInput.value === "") {
      alert("Invalid Value")
   } else {
      taskList.push(taskInput.value)

      taskinput.value = "";
   }

   listTasks();

   // returns false for form so it doesn't reload
   return false;
}

function listTasks(){

   let listContainer = document.getElementById("listContainer");

   listContainer.innerHTML = "";

   // TODO: look up for loop
   for (let i = 0; i < taskList.length; i++) {
      let containerTag = document.createElement('div');
      console.log(taskList)
      console.log(taskList[i], i);
      containerTag.innerHTML = `${taskList[i]} <button onclick="deleteTask(${i})"> delete </button> `;
      listContainer.appendChild(containerTag);
   }
}

// TODO: look up functions
function deleteTask(taskListIndex) {

   taskList.splice(taskListIndex, 1);


   listTasks()
}