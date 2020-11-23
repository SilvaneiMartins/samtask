/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Gerenciamento de Taregas [Sam Task];
*/
import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext)
    return (
        <li className="list-item">
            <span>{task.title} </span>
            <div>
                <button
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>{' '}
                <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
