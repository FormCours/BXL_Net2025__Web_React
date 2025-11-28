import style from './TaskList.module.css';
// import tasks from './mockup.json';
import clsx from 'clsx';

export default function TaskList({ tasks, onTaskDelete, onTaskFinish }) {

    // Les méthodes « onTaskDelete » et « onTaskFinish » permettent d'activer le code parent et elles sont directement transmise au composant enfant "TaskListItem"

    return (
        <ul className={style['task-list']}>
            {tasks.map(task => (
                <TaskListItem key={task.id} {...task} 
                    onDelete={onTaskDelete}
                    onFinish={onTaskFinish}
                    />
            ))}
        </ul>
    );
}

function TaskListItemPriority({ priority }) {
    return (priority === 'urgent') ? <span className={style['task-priority-urgent']}>Urgent</span>
        : (priority === 'low') && <span className={style['task-priority-low']}>Osef tier</span>
}

function TaskListItem({ id, name, desc, priority, isDone, onDelete, onFinish }) {

    return (
        <li className={clsx(style['task-item'], isDone && style['task-done'])}>
            <div className={style['task-item-info']}>
                <p>
                    <input type="checkbox" name="task-done" checked={isDone} readOnly tabIndex={-1} aria-label={`Tache « ${name} est ${isDone ? 'terminé' : 'en cours'}`} aria-disabled={true} />
                    {' '}
                    <span className={style['task-title']}>{name}</span>
                    {' '}
                    <TaskListItemPriority priority={priority} />
                </p>
                {desc && (<p className={style['task-desc']}>{desc}</p>)}
            </div>
            <div className={style['task-item-action']}>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
}