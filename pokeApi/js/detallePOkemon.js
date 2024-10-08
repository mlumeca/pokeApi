$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    var pokemonId = urlParams.get("id");

    if (pokemonId == null) {
        alert("No se ha recibido el ID de pokemon");
    }

    $("#detallePokemon");
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon",
      method: "GET",
    }).done(function (pokemon) {


        // Este bucle hay que cambiarlo 
      var listadoPomemon = pokemon.results;
      listadoPomemon.forEach(function (pokemon) {
        var pokemonId = pokemon.url.split("/")[6];

        var template = `
                <div class="d-flex justify-content-around mt-5 col-12">
                    <div id="botonAnterior" class="btn d-flex mt-3 rounded-5">
                        <h3 class="align-content-center ms-2 mt-2 me-2"><i class="bi bi-caret-left-fill me-2"></i> nº${pokemonId - 1}
                            ${pokemonName - 1}</h3>
                    </div>

                    <div>
                        <h1>${pokemonName} nº${pokemonId}</h1>
                    </div>

                    <div id="botonSiguiente" class="btn d-flex mt-3 rounded-5 ">
                        <h3 class="align-content-center me-2 ms-2 mt-2">nº${pokemonId - 1} ${pokemonName - 1} <i
                                class="bi bi-caret-right-fill ms-2"></i></h3>
                    </div>
                </div>

                <div class="d-flex mt-5 col-12">
                    <div class="col-6 text-center">
                        <img src="../img/bulbasaur.png" alt>
                    </div>

                    <div class="col-6">
                        <div id="tarjeta-detalle" class="rounded-5 mb-4">
                            <div class="d-flex">
                                <p class="tamayo-letra ms-4 mt-2">Categoría: Semilla</p>
                                <p class="tamayo-letra ms-4 mt-2">Habilidad: Espesura</p>
                            </div>
                            <div class="d-flex">
                                <p class="tamayo-letra ms-4 mt-4">Peso: 6.9kg</p>
                                <p class="tamayo-letra ms-5 mt-4">Altura: 0.7m</p>
                                <p class="tamayo-letra ms-5 mt-4">Exp base: 64</p>
                            </div>
                            <div class="d-flex">
                                <p class="tamayo-letra ms-4 mt-4">Tipo:
                                    <div class="rounded-5 planta text-center">
                                        <p class="align-content-center ms-2 mt-2 me-2">
                                            Planta
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.57437 15.1244C2.51259 15.0663 2.45149 15.007 2.3911 14.9466C-0.797032 11.7585 -0.797032 6.58953 2.3911 3.40142C5.57921 0.213283 15.7378 0 15.7378 0C15.7378 0 17.1245 11.7585 13.9363 14.9466C11.1049 17.7781 6.71096 18.0949 3.52992 15.8969L6.09309 12.7515L10.1905 11.8668L6.84582 11.5325L8.97144 9.36818L11.391 8.83813L9.47776 8.27151L11.391 4.82001L8.66958 7.87256L7.61866 6.38956L7.98861 8.83813L6.09309 10.975L5.21443 8.27148V11.8668L2.57437 15.1244Z"
                                                    fill="black" />
                                            </svg>
                                        </p>
                                    </div>
                                    <div class="ms-3 rounded-5 veneno text-center">
                                        <p class="align-content-center ms-2 mt-2 me-2">
                                            Veneno
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_72_160)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M12.5338 11.5268C14.0486 10.3157 15 8.5657 15 6.61963C15 2.9637 11.6421 0 7.5 0C3.35786 0 0 2.9637 0 6.61963C0 8.49545 0.883995 10.189 2.30435 11.3936C2.21827 11.6908 2.17105 12.0141 2.17105 12.3521C2.17105 13.8145 3.0547 15 4.14475 15C4.85303 15 5.47418 14.4995 5.82237 13.7477C6.17057 14.4995 6.79172 15 7.5 15C8.14564 15 8.71887 14.5841 9.07895 13.9411C9.43904 14.5841 10.0123 15 10.6579 15C11.7479 15 12.6316 13.8145 12.6316 12.3521C12.6316 12.064 12.5972 11.7865 12.5338 11.5268ZM11.8421 6.75091C11.8421 8.60698 9.85389 10.1116 7.40133 10.1116C4.94874 10.1116 2.96054 8.60698 2.96054 6.75091C2.96054 4.89483 4.94874 3.39018 7.40133 3.39018C9.85389 3.39018 11.8421 4.89483 11.8421 6.75091Z"
                                                        fill="black" />
                                                </g>
                                                <defs>
                                                    <clippath id="clip0_72_160">
                                                        <rect width="15" height="15" fill="white" />
                                                    </clippath>
                                                </defs>
                                            </svg>
                                        </p>
                                    </div>
                                </p>
                                <p class="tamayo-letra ms-5 mt-4">
                                    Sexo:
                                    <img src="../img/macho.png" width="25" alt>
                                    <img src="../img/hembra.png" width="25" alt>
                                </p>
                            </div>
                        </div>
                        <div id="estadisticas" class="rounded-5  text-center">
                            <h4 class="pt-3">Estadíticas base</h4>

                        </div>
                    </div>

                </div>
                `;
        $('#listaPokemon').append(template);
      });
    });
});