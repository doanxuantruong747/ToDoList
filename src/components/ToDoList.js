import React, { useState } from 'react'
import AddTask from './AddTask';
import Header from './Header';
import TaskList from './TaskList';
import "./ToDoList.css"

function ToDoList() {
    const [tasks, setTasks] = useState([
        { id: "task_1", title: "Learn JS", status: 0 },
        { id: "task_2", title: "React Rending Array", status: 0 },
    ]);
    const [showIncompleted, setShowIncCompleted] = useState(false);
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            const task = {
                id: Math.floor(Math.random() * 101),
                title: newTask,
                status: 0,
            }
            setTasks([...tasks, task]);
            setNewTask("");
        }
    }
    const handleNewTask = (e) => {
        setNewTask(e.target.value)
    }
    const handleRomeve = (taskID) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }
    const setStatus = (taskID, status) => {
        setTasks(
            tasks.map(task => {
                if (task.id === taskID) {
                    return { ...task, status: status ? 1 : 0 }
                }
                return task;
            })
        )
    }

    return (
        <div className="container">
            <Header />
            <TaskList tasks={tasks}
                showIncompleted={showIncompleted}
                // task={task} 
                setStatus={setStatus}
                handleRomeve={handleRomeve}
                setShowIncCompleted={setShowIncCompleted}
            />

            <AddTask
                newTask={newTask}
                handleNewTask={handleNewTask}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default ToDoList