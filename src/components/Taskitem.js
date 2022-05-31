import React from 'react'

function Taskitem({ task, setStatus, handleRomeve }) {
    return (
        <li key={task.id}
            className={task.status ? "done" : ""}>

            <span>{task.title}</span>
            <div className="action">
                <input
                    type="checkbox"
                    className="btn-action btn-action-done"
                    checked={Boolean(task.status)}
                    onChange={(e) => { setStatus(task.id, e.target.checked) }}
                />

                <button
                    className="btn-action btn-action-delete"
                    onClick={(e) => handleRomeve(task.id)}
                >✖</button>
            </div>
        </li>
    )
}

export default Taskitem