import React from 'react'

function AddTask({ newTask, handleNewTask, handleSubmit }) {
    return (
        <form action="#" className="form">
            <label htmlFor="newitem">Add to the todo list</label>
            <input
                type="text"
                id="newitem"
                value={newTask}
                onChange={handleNewTask}
            />
            <button
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
            >Add Item</button>
        </form>
    )
}

export default AddTask