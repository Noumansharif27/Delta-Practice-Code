let todo = [];
let req = prompt("Enter a task to apply.");
while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }

  if (req == "list") {
    console.log("--------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("--------------------");
  } else if (req == "add") {
    let addItem = prompt("What task you want to add.");
    todo.push(addItem);
    console.log("Task added");
  } else if (req == "delete") {
    let idx = prompt("please enter task index.");
    todo.splice(idx, 1);
    console.log("task deleted");
  }
  req = prompt("Enter a task you want to apply");
}
