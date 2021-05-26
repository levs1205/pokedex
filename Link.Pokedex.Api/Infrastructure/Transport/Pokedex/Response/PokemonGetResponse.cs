using Link.Pokedex.Api.Infrastructure.Crosscutting.Dto;
using Link.Pokedex.Api.Infrastructure.Transport.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Infrastructure.Transport.Pokedex.Response
{
    public class PokemonGetResponse: BaseResponse
    {
        public PokemonDto Pokemon { get; set; }
    }
}
