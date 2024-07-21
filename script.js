searchInput = document.getElementById("search-input");
searchButton = document.getElementById("search-button");

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

const fetchPokemonData = async (searchID) => {
    try{
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchID}`);
        const data = await res.json();
        updatePokemonInformation(data);
    }
    catch{
        alert("Pokémon not found");
    }
}

const updatePokemonInformation = (pokemonData) => {
    console.log(pokemonData);
    const {sprites,name, id, weight, height} = pokemonData;
    const {front_default} = sprites;

    pokemonName.textContent = name;
    pokemonID.textContent = `ID# ${id}`;
    pokemonWeight.textContent = `Weight: ${weight}`;
    pokemonHeight.textContent = `Height: ${height}`;
    // pokemonHP = 

    pokemonContainer.innerHTML += `<img src="${front_default}" alt="${name}" id="sprite"></img>`;

}



searchButton.addEventListener("click",() => {
    console.log(searchInput.value);
    fetchPokemonData(searchInput.value);
});

