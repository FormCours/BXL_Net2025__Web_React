import { Suspense, use } from 'react';
import { getPokemonInfo } from '../../services/pokemon.service';



// Réaliser le requete et l'afficher quand elle est terminé
export default function PokemonRequester({pokeId}) {

    const promise = getPokemonInfo(pokeId);

    return (
        <div>
            <p>Information sur le pokemon « {pokeId} »</p>
            <Suspense fallback={<PokemonRequesterLoading />}>
                <PokemonRequesterResult pokemonPromise={promise} />
            </Suspense>
        </div>
    );
}

// Affichage du resutlat de la promesse
function PokemonRequesterResult({ pokemonPromise }) {

    // ↓ La méthode « use(...) » permet d'utiliser des promesses dans une « simple » fonction react
    const data = use(pokemonPromise);

    return (
        <div>
            <p>{data.name} - {data.genus}</p>
            { data.isLegendary || data.isMythical && (
                <p>Ce pokemon est {data.isLegendary && 'Legendaire'} {data.isMythical && 'Mytique'}</p>
            )}
            <p>Description du pokemon</p>
            <ul>
                {data.flavorText.map((text, idx) => (
                    <li key={idx}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

function PokemonRequesterLoading() {
    return (
        <div>Chargement du pokemon en cours... !</div>
    )
}