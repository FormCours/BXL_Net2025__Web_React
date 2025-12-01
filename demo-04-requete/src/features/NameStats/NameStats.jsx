import { useState } from 'react';
import NameForm from '../../components/Form/NameForm';
import axios from 'axios';

/**
 * Demo Requete déclancher par l'utilisateur
 */
export default function NameStats() {

    // State necessaire pour la requete
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    // Gestion de l'event
    const handleSearchName = (name) => {
        // Utilisation d'un state pour indiquer le chargement de données
        setLoading(true);
       
        // Contacter une WebAPI pour obtenir des données sur le nom
       axios.get('https://api.agify.io', {
            params: {
                name: name, country_id: 'be'
            }
        })
        .then(response => {
            // Modifier le state avec les données recus
            setData(response.data);
        })
        .catch(resquestError => {
            // Modifier le state pour indiquer l'erreur de la requete
            setError(true)
        })
        .finally(() => {
            // Utilisation d'un state pour indiquer le chargement est terminée
            setLoading(false);
        })
    };

    // Rendu
    return (
        <>
            <NameForm onSearchName={handleSearchName} />
            {isLoading ? (
                <p>Chargement... </p>
            ) : error ? (
                <p>Erreur !</p>
            ) : !!data ? (
                <p>Les {data.name} ont potentiellement {data.age} ans !</p>
            ) : (
                <p>Pas de recherche effectué !</p>
            )}
        </>
    )
} 