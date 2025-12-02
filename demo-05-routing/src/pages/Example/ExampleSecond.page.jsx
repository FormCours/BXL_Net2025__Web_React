import { useSearchParams } from 'react-router'

export default function ExempleSecondPage() {

    // Permet de conserver des données dans l'url (Attention, c'est public :p)
    const [searchParams, setSearchParams] = useSearchParams();

    // Lecture des données
    const name = searchParams.get('name');

    // Modification
    const handleSwitchName = () => {

        // Modifier un des parametres de l'url (Conserve les params existants)
        setSearchParams(currentSearchParams => {
            currentSearchParams.set('name', 'Robert');
            return currentSearchParams;
        });

        // Remplacer les parametres de l'url (via URLSearchParams)
        /*
        setSearchParams(currentSearchParams => {
            const nextSearchParams = new URLSearchParams();
            nextSearchParams.set('name', 'Robert');
            return nextSearchParams;
        });
        */

        // Remplacer les parametres de l'url (Via objet)
        /*
        setSearchParams({ name: 'Robert' });
        */
    }

    return (
        <>
            <h2>Second</h2>
            <p>Nom dans l'url : {name ?? 'N/A'}</p>

            <button onClick={handleSwitchName}>C'est Robert</button>
        </>
    )
}
