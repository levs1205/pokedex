using Arch.EntityFrameworkCore.UnitOfWork;
using AutoMapper;
using Link.Pokedex.Api.Infrastructure.Crosscutting.Dto;
using Link.Pokedex.Api.Infrastructure.Data.Context;
using Link.Pokedex.Api.Infrastructure.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Application
{
    public class PokemonAppService: IPokemonAppService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork<PokedexContext> _unitOfWork;
        public PokemonAppService(IUnitOfWork<PokedexContext> unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public PokemonDto GetPokemon(string name)
        {
            PokemonDto pokemon=null;

            var pk = _unitOfWork.DbContext.Pokemon.FirstOrDefault(p => p.Nombre == name);
            
            if(pk != null)
            {
                pokemon = _mapper.Map<Pokemon, PokemonDto>(pk);

                var ltp = (from tt in _unitOfWork.DbContext.PokemonTipo
                           join tp in _unitOfWork.DbContext.Tipo on tt.IdTipo equals tp.IdTipo
                           where tt.IdPokemon == pk.IdPokemon
                           select tp).ToList();

                pokemon.Tipo = _mapper.Map<List<Tipo>, List<TipoDto>>(ltp);

                var ldb = (from dd in _unitOfWork.DbContext.PokemonDebilidad
                           join tp in _unitOfWork.DbContext.Tipo on dd.IdTipoDebilidad equals tp.IdTipo
                           where dd.IdPokemon == pk.IdPokemon
                           select tp).ToList();

                pokemon.Debilidad = _mapper.Map<List<Tipo>, List<TipoDto>>(ldb);

            }

            return pokemon;
        }
    }
}
