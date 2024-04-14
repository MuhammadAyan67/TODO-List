#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let condition = true;
// while(condition){
//     let addTask= await inquirer.prompt([
//         {
//      name : "task",
//      type : "input",
//      message : "Enter your task"
//     }
// ])
// todoList.push(addTask.task)
// console.log(`${addTask.task} task added in todo list successfully !`)
// let addmoreTask= await inquirer.prompt([
//     {
//         name : "addmoretask",
//         type : "confirm",
//         message : "Do you want to add more task ?",
//         default : "false"
//     }
// ])
// condition = addmoreTask.addmoretask
// }
// console.log(`Your updated TODO List ${todoList} `)
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Delete Task", "Update Task", "View Task", "Exit"]
            }
        ]);
        if (option.choices === "Add Task") {
            await addTask();
        }
        else if (option.choices === "Delete Task") {
            await deleteTask();
        }
        else if (option.choices === "Update Task") {
            await updateTask();
        }
        else if (option.choices === "View Task") {
            await viewTask();
        }
        else if (option.choices === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`${newTask.task} Task has been Added in TODO List Successfully! `);
};
let viewTask = () => {
    console.log("\nYour TODO List\n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1} : ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no .'of the task you want to delete :",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`${deleteTask} this task has been delete from your list `);
};
let updateTask = async () => {
    await viewTask();
    let updateTaskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no. 'of the task you want to update"
        },
        {
            name: "newTask",
            type: "input",
            message: "Now , Enter new task :",
        }
    ]);
    todoList[updateTaskindex.index - 1] = updateTaskindex.newTask;
    console.log(`\n Task at index on . ${updateTaskindex.index - 1} updated successfully in your list ! `);
};
main();
