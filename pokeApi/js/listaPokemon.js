$(document).ready(function () {
  getPokemonListV2();

  function getPokemonListV2() {

    $("#listaPokemon");
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      method: "GET",
    }).done(function (pokemon) {

      var listadoPomemon = pokemon.results;
      listadoPomemon.forEach(function (pokemon) {
        var pokemonId = pokemon.url.split("/")[6];

        var template = `
                <div class="d-flex justify-content-around col-3">
                    <div class="pokemon-card text-center">
                        <a class="text-decoration-none" href="detallePokemon.html?id=${pokemonId}">
                            <div>
                                <img class="pokemon-sprite" 
                                    src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemonId.padStart(3, '0')}.png" />
                            </div>
                            <div class="pokemon-name ">
                                <p class="mt-3">${pokemon.name}</p>
                                <p>${pokemonId}</p>
                            </div>
                        </a>
                    </div>

                </div>
                `;
        $('#listaPokemon').append(template);
      });

    });
  }
});



