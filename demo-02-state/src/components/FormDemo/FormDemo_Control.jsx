import { useId, useState } from 'react';

export default function FormDemoControl() {

    // Hook d'accessibilité : Génération d'id pour l'html
    const inputId = useId();

    // Le state pour chaque élément du formulaire (Contenu du formulaire !)
    const [username, setUsername] = useState('');
    const [nbGuest, setNbGuest] = useState('');
    const [allowSpam, setAllowSpam] = useState(false);

    // Valeur de state pour l'affichage
    const [message, setMessage] = useState(null);

    // Méthode pour traiter l'event "submit"
    const handleSubmit = (event) => {
        // Déactivation du comportement par defaut
        event.preventDefault();

        // Traitement...
        if(username.trim() === '' || parseInt(nbGuest) < 1) {
            setMessage('Boulet !');
            return;
        }

        const data = {
            username, nbGuest, allowSpam
        };
        console.log(data);
        setMessage('Bravo !')

        // Effacer le formulaire
        handleReset();
    }

    const handleReset = () => {
        // Ré-initialiser le state !
        setUsername('');
        setNbGuest('');
        setAllowSpam(false);
    }

    // Rendu avec une liaison forte entre le state et le formulaire (Composant contrôlé)
    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <div>
                <label htmlFor={inputId + 'username'}>Username : </label>
                <input id={inputId + 'username'} type="text" 
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor={inputId + 'nbGuest'}>Nombre invité : </label>
                <input id={inputId + 'nbGuest'} type="number" 
                    value={nbGuest} onChange={(e) => setNbGuest(e.target.value)}/>
            </div>
            <div>
                <label htmlFor={inputId + 'cond'}>Condition : </label>
                <input id={inputId + 'cond'} type="checkbox" 
                    checked={allowSpam} onChange={(e) => setAllowSpam(e.target.checked)}/>
            </div>
            <div>
                <button type="submit">Valider</button>
                <button type="reset">Effacer</button>
                {message && (<span>{message}</span>)}
            </div>
        </form>
    );
}