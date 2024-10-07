$(document).ready(function () {
  getPokemonListV2();



  function getPokemonListV2() {

    $("#listaPokemon").html("<img src='loading.gif' />");
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      method: "GET",
    }).done(function (pokemon) {

      var listadoPomemon = pokemon.results;
      listadoPomemon.forEach(function (pokemon) {
        var pokemonId = pokemon.url.split("/")[6];

        var template = `
                <div class="d-flex justify-content-around col-3">

                    <div class="pokemon-card">
                        <a class="text-decoration-none" href="detail.html?id=${pokemonId}">
                            <div>
                                <img class="pokemon-sprite"
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png" />
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



