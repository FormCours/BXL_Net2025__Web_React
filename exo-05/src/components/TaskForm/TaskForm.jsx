import { useActionState, useId } from 'react'
import style from './TaskForm.module.css'
import clsx from 'clsx'; // Package pour générer un classname conditionnel

// Objectif du state : Afficher les erreurs et conserver les données saisies en cas d'erreur
const INITIAL_TASK_STATE = {
    data: { name: '', desc: '', priority: 'normal' },
    error: null
}

// Composant formulaire
export default function TaskForm({
    textBtnSubmit = 'Valider',   /* Permet de customiser le contenu text du bouton submit */
    onTaskSubmit = (data) => { } /* NOOP - Permet d'éviter un plantage si le parent ne fourni pas de callback */
}) {

    // Le hook pour l'accessibilité des label et zone de saisie
    const inputId = useId();

    // L'action de traitement du formulaire
    const taskAction = async (state, formData) => {

        // Récuperation des données du formulaire
        const data = Object.fromEntries(formData.entries());

        // Validation des données
        if (data.name.trim() === '') {
            //? Mise à jour du state : Erreur !
            return {
                data,
                error: { name: true }
            }
        }

        // Traitement
        //? Utilisation des props pour communiquer avec le composant parent
        onTaskSubmit(data);

        //? Mise à jour du state : Happy Scenario
        return { ...INITIAL_TASK_STATE };
    };

    // Le state synchroniser à l'action
    const [state, handleSubmit] = useActionState(taskAction, INITIAL_TASK_STATE);


    return (
        <form className={style['task-form']} action={handleSubmit}>
            <div>
                <label htmlFor={inputId + 'name'}>Nom</label>
                <input id={inputId + 'name'} type="text"
                    name='name'
                    className={clsx(state.error?.name && style['error'])}
                    defaultValue={state.data?.name} />
            </div>
            <div>
                <label htmlFor={inputId + 'desc'}>Description</label>
                <textarea id={inputId + 'desc'}
                    name='desc'
                    className={clsx(state.error?.desc && style['error'])}
                    defaultValue={state.data?.desc} />
            </div>
            <div>
                <label htmlFor={inputId + 'prio'}>Priorité</label>
                {/* La valeur "key" dans du select force React a actualiser le re-render, pour éviter un bug (Il ne reprend pas la valeur "defaultValue" après le traitement de l'action) */}
                <select id={inputId + 'prio'}
                    name='priority'
                    className={clsx(state.error?.priority && style['error'])}
                    key={'priority-' + state.data?.priority}
                    defaultValue={state.data?.priority} >
                    <option value="urgent">Urgent</option>
                    <option value="normal">Normal</option>
                    <option value="low">Basse</option>
                </select>
                <div className='space'></div>
                <button>{textBtnSubmit}</button>
            </div>
        </form>
    )
};