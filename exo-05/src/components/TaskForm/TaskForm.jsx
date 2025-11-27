import style from './TaskForm.module.css'

export default function TaskForm() {

    return (
        <form className={style['task-form']}>
            <div>
                <label htmlFor="">Nom</label>
                <input id='' type="text" />
            </div>
            <div>
                <label htmlFor="">Description</label>
                <textarea id="" />
            </div>
            <div>
                <label htmlFor="">Priorité</label>
                <select id="">
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