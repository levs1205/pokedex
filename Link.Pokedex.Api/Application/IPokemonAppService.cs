using Link.Pokedex.Api.Infrastructure.Crosscutting.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Application
{
    public interface IPokemonAppService
    {
        PokemonDto GetPokemon(string name);
    }
}
