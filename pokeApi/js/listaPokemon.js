$(document).ready(function () {
<<<<<<< HEAD
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



=======
    getPokemonList();
  
    $(document).on("click", "#btn-get-data", function () {
      getPokemonList();
    });
  
    function getPokemonList() {
      $("#data-content").html("<img src='loading.gif' />");
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
      }).done(function (resp) {
        setTimeout(function () {
          $("#data-content").html("");
          var listadoPomemon = resp.results;
          listadoPomemon.forEach(function (pokemon) {
            var pokemonId = pokemon.url.split("/")[6];
            var template = `<p><a href="detail.html?pid=${pokemonId}"><h1 class="pokemon" pokemonid="1">${pokemon.name}</h1><img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${pokemonId}.png"</a></p>`;
            $("#data-content").append(template);
          });
        }, 1000);
      });
    }
  });
>>>>>>> e47854b024dc38d4172fc8aa42f81f72768d7992
