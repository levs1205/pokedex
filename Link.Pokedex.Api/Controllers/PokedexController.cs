using Link.Pokedex.Api.Application;
using Link.Pokedex.Api.Infrastructure.Transport.Pokedex.Request;
using Link.Pokedex.Api.Infrastructure.Transport.Pokedex.Response;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PokedexController : ControllerBase
    {
        private readonly IPokemonAppService _pokemonAppService;

        public PokedexController(IPokemonAppService pokemonAppService
            )
        {
            _pokemonAppService = pokemonAppService;
        }

        public PokemonGetResponse PokemonGet(PokemonGetRequest request)
        {
            return new PokemonGetResponse { Pokemon = _pokemonAppService.GetPokemon(request.Name) };
        }
    }
}
