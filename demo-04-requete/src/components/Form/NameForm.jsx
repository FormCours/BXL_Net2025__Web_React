import { useActionState } from 'react'
import style from './NameForm.module.css';


const INITIAL_STATE = {
    message: ''
}

export default function NameForm({ onSearchName }) {

    const formAction = async (state, formData) => {
        const name = formData.get('search-data');

        // ↓ La présence du mot clef "await" permet au callback « onSearchName » d'être async
        await onSearchName(name);

        return { message: 'Formulaire envoyé' }
    }

    const [state, handleSubmit, isPending] = useActionState(formAction, INITIAL_STATE);

    return (
        <form action={handleSubmit} className={style['search-form']}>
            <label>Nom : </label>
            <input type='text' name='search-data'></input>

            <button type='submit' disabled={isPending}>Chercher</button>
            <button type='reset'>Effacer</button>
            {/* {state.message && (
                <span className={style['msg-form']}>{state.message}</span>
            )} */}
        </form>
    )
}