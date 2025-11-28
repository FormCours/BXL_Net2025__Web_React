import style from './TaskList.module.css';
import tasks from './mockup.json';
import clsx from 'clsx';

export default function TaskList() {

    return (
        <ul className={style['task-list']}>
            {tasks.map(task => (
                <TaskListItem key={task.id} {...task} />
            ))}
        </ul>
    );
}

function TaskListItemPriority({ priority }) {
    return (priority === 'urgent') ? <span className={style['task-priority-urgent']}>Urgent</span>
        : (priority === 'low') && <span className={style['task-priority-low']}>Osef tier</span>
}

function TaskListItem({ id, name, desc, priority, isDone }) {

    return (
        <li className={clsx(style['task-item'], isDone && style['task-done'])}>
            <div className={style['task-item-info']}>
                <p>
                    <input type="checkbox" name="task-done" checked={isDone} readOnly />
                    {' '}
                    <span className={style['task-title']}>{name}</span>
                    {' '}
                    <TaskListItemPriority priority={priority} />
                </p>
                {desc && (<p className={style['task-desc']}>{desc}</p>)}
            </div>
            <div className={style['task-item-action']}>
                <button disabled={isDone}>Terminer</button>
                <button>Supprimer</button>
            </div>
        </li>
    );
}