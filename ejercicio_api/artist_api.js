const pokemonInput = document.getElementById('pokemonInput');
const searchBtn = document.getElementById('searchBtn');
const pokemonInfo = document.getElementById('pokemonInfo');

searchBtn.addEventListener('click', async () => {
  const pokemonName = pokemonInput.value.trim().toLowerCase();
  if (pokemonName !== '') {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    pokemonInfo.innerHTML = '';

    if (response.ok) {
      const card = document.createElement('div');
      card.className = 'pokemon-card card mb-3';
      card.innerHTML = `
        <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text"><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
          <p class="card-text"><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
          <p class="card-text"><strong>Altura:</strong> ${data.height / 10} m</p>
          <p class="card-text"><strong>Peso:</strong> ${data.weight / 10} kg</p>
        </div>
      `;
      pokemonInfo.appendChild(card);
    } else {
      pokemonInfo.innerHTML = '<p class="text-center">No se encontró el Pokémon</p>';
    }
  }
});