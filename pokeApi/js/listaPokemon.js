$(document).ready(function () {
  getPokemonListV2();
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

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
                <div class="d-flex justify-content-around col custom-col mt-5">
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

  tiposEspayol();

  function tiposEspayol(){

    $("#tipoPoke");
    $.ajax({
      url: "https://pokeapi.co/api/v2/type",
      method: "GET",
      
    }).done(function (tipoPokemon) {
      var tipo = tipoPokemon.results;
      tipo.forEach(function (tipoPokemon) {
        
        var template = `
                 <li class="col-6 col-3 pb-2"><a class="dropdown-item text-capitalize" href="#">${tipoPokemon.name}</a></li>
                `;
        $('#tipoPoke').append(template);
      });

    });
  }

  function fondoTipo(pokemon) {

    var tipo = pokemon.type[0].type.name;
    var fondo = '';

    switch (tipo) {
      case 'grass':
        fondo = '#5CBE64';
        break;
      case 'fire':
        fondo = '#FBAE46';
        break;
      case 'water':
        fondo = '#6CBDE4';
        break;
      case 'poison':
        fondo = '#C261D4';
        break;
      case 'bug':
        fondo = '#AFC836';
        break;
      case 'ground':
        fondo = '#D29463';
        break;
      case 'dark':
        fondo = '#9298A4';
        break;
      case 'electric':
        fondo = '#FBE273';
        break;
      case 'fairy':
        fondo = '#F3A7E7';
        break;
      case 'fighting':
        fondo = '#E74347';
        break;
      case 'ghost':
        fondo = '#7773D4';
        break;
      case 'ice':
        fondo = '#8CDDD4';
        break;
      case 'normal':
        fondo = '#A3A49E';
        break;
      case 'psychic':
        fondo = '#FE9F92';
        break;
      case 'rock':
        fondo = '#D7CD90'
        break;
      case 'steel':
        fondo = '#58A6AA';
        break;
      case 'dragon':
        fondo = '#0180C7';
        break;
      case 'flying':
        fondo = '#A6C2F2';
        break;
      default:
        fondo = '#F0EFEE';
        break;
    }

    return fondo;

  }
});





