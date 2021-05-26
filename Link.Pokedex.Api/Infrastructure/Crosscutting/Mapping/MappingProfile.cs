using AutoMapper;
using Link.Pokedex.Api.Infrastructure.Crosscutting.Dto;
using Link.Pokedex.Api.Infrastructure.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Infrastructure.Crosscutting.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Pokemon, PokemonDto>();
            CreateMap<Tipo, TipoDto>();
        }
    }
}
