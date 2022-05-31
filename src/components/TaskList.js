import React from 'react'
import Taskitem from './Taskitem'

function TaskList({ setShowIncCompleted, tasks, showIncompleted, task, setStatus, handleRomeve }) {
    return (
        <>
            <ul className="task-list">
                {tasks.filter(task => showIncompleted ? task.status !== 1 : true)
                    .map(task => (
                        <Taskitem task={task}
                            setStatus={setStatus}
                            handleRomeve={handleRomeve} />
                    ))}
            </ul>

            <div className="filter-wrapper">
                <label htmlFor="filter" className="filter-label">Show incompleted tasks only</label>
                <input
                    type="checkbox"
                    id="filter"
                    checked={showIncompleted}
                    onClick={(e) => setShowIncCompleted(e.target.checked)}
                />
            </div>
        </>
    )
}

export default TaskList