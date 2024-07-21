const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let pokemonContainer = document.getElementById("pokemon-container");
let pokemonName = document.getElementById("pokemon-name");
let pokemonID = document.getElementById("pokemon-id");
let pokemonWeight = document.getElementById("weight");
let pokemonHeight = document.getElementById("height");
let pokemonTypes = document.getElementById("types");
let pokemonHP = document.getElementById("hp");
let pokemonAttack = document.getElementById("attack");
let pokemonDefense = document.getElementById("defense");
let pokemonSpecialAttack = document.getElementById("special-attack");
let pokemonSpecialDefense = document.getElementById("special-defense");
let pokemonSpeed = document.getElementById("speed");

const reReferenceElements = () => {
    pokemonContainer = document.getElementById("pokemon-container");
    pokemonName = document.getElementById("pokemon-name");
    pokemonID = document.getElementById("pokemon-id");
    pokemonWeight = document.getElementById("weight");
    pokemonHeight = document.getElementById("height");
    pokemonTypes = document.getElementById("types");
    pokemonHP = document.getElementById("hp");
    pokemonAttack = document.getElementById("attack");
    pokemonDefense = document.getElementById("defense");
    pokemonSpecialAttack = document.getElementById("special-attack");
    pokemonSpecialDefense = document.getElementById("special-defense");
    pokemonSpeed = document.getElementById("speed");
}

const fetchPokemonData = async (searchID) => {
    try{
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchID}`);
        const data = await res.json();
        updatePokemonInformation(await data);
    }
    catch{
        alert("Pokémon not found");
    }
}

const updatePokemonInformation = (pokemonData) => {
    reReferenceElements();

    //remove image if it exists
    if(pokemonContainer.querySelector("#sprite") != null){
        pokemonContainer.removeChild(document.getElementById("sprite"));
    }

    //remove any types if they exist
    pokemonContainer.querySelector(".type-container").innerHTML = "";

    const {stats, types,sprites,name, id, weight, height} = pokemonData;
    const {front_default} = sprites;

    types.forEach((typeObject) => {
        pokemonTypes.innerHTML += `<div class="type-list-container ${typeObject.type.name}"><p class="type-text">${typeObject.type.name.toUpperCase()}</p></div>`;
    })



    console.log(pokemonData);

    pokemonName.textContent = name.toUpperCase();
    pokemonID.textContent = `#${id}`;
    pokemonWeight.textContent = `Weight: ${weight}`;
    pokemonHeight.textContent = `Height: ${height}`;
    pokemonHP.textContent = stats[0].base_stat;
    pokemonAttack.textContent = stats[1].base_stat;
    pokemonDefense.textContent = stats[2].base_stat;
    pokemonSpecialAttack.textContent = stats[3].base_stat;
    pokemonSpecialDefense.textContent = stats[4].base_stat;
    pokemonSpeed.textContent = stats[5].base_stat;


    pokemonContainer.innerHTML += `<img src="${front_default}" alt="${name}" id="sprite"></img>`;

}



searchButton.addEventListener("click",() => {
    fetchPokemonData(searchInput.value.toLowerCase());
});

