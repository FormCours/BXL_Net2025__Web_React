import axios from 'axios';


function selectLang(elem) {
    return elem.language.name === 'fr';
}

export async function getPokemonInfo(id) {

    const { data } = await axios.get(`pokemon-species/${id}`, {
        baseURL: 'https://pokeapi.co/api/v2/'
    });

    return {
        pokedex: data.id,
        name: data.names.find(selectLang).name,
        genus: data.genera.find(selectLang).genus,
        flavorText: data.flavor_text_entries.filter(selectLang).map(elem => elem.flavor_text),
        isLegendary: data.is_legendary,
        isMythical: data.is_mythical
    };
}
