import { useId } from 'react'
import style from './TaskForm.module.css'

export default function TaskForm() {

    const inputId = useId();

    return (
        <form className={style['task-form']}>
            <div>
                <label htmlFor={inputId + 'name'}>Nom</label>
                <input id={inputId + 'name'} type="text" />
            </div>
            <div>
                <label htmlFor={inputId + 'desc'}>Description</label>
                <textarea id={inputId + 'desc'} />
            </div>
            <div>
                <label htmlFor={inputId + 'prio'}>Priorité</label>
                <select id={inputId + 'prio'}>
                    <option value="">Urgent</option>
                    <option value="">Normal</option>
                    <option value="">Basse</option>
                </select>
                <div className='space'></div>
                <button>Ajouter</button>
            </div>
        </form>
    )
};