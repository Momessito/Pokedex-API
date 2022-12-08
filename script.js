const section = document.getElementById('section')

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const repetição = async () => {
    for (let i = 1; i <= 150; i++) {
        await getPokemon(i)
    }
}


const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

function createPokemonCard(pokemon) {

    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types[0].type.name
    const pokes_types = poke_types.toString()
    const color_type = colors[poke_types]
    var card = `    
<div id="card" style="background-color:${color_type};">
<h1 id="name">${pokemon.name}</h1>
<img id="img" src="./imgs/${pokemon.id}.png">
<div class="subtitle">
    <h3>${poke_types}</h3>
</div>
<h2>${pokemon.id}</h2>
</div>`
    section.innerHTML += card
}

repetição()

