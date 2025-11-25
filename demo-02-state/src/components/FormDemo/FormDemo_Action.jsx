import { useActionState, useId } from 'react';

export default function FormDemoAction() {

    // Hook d'accessibilité : Génération d'id pour l'html
    const inputId = useId();
    
    // L'action à executer au submit du form
    const exampleAction = async (state, formData) => {

        // Test de garde avec un retour du state pour l'erreur
        if(formData.get('username') === '' || parseInt(formData.get('nb-guest')) < 1) {
            return {
                message : 'Boulet !'
            }
        }

        // Le traitement
        const data = {
            username: formData.get('username'),
            nbGuest: formData.get('nb-guest'),
            allowSpam: formData.has('allow-spam')
        };
        console.log(data);

        // Le retour de state en succes
        return {
            message: 'Bravo !'
        }
    }

    // State liée à une action
    const [state, handleAction, isPending] = useActionState(exampleAction, { message : ''});

    // Rendu
    return (
        <form action={handleAction}>
            <div>
                <label htmlFor={inputId + 'username'}>Username : </label>
                <input id={inputId + 'username'} type="text" name='username' />
            </div>
            <div>
                <label htmlFor={inputId + 'nbGuest'}>Nombre invité : </label>
                <input id={inputId + 'nbGuest'} type="number" name='nb-guest' />
            </div>
            <div>
                <label htmlFor={inputId + 'cond'}>Condition : </label>
                <input id={inputId + 'cond'} type="checkbox" name='allow-spam' />
            </div>
            <div>
                <button type="submit">Valider</button>
                <button type="reset">Effacer</button>
                {state.message && (<span>{state.message}</span>)}
            </div>
        </form>
    );
}