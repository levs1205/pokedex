// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

#nullable disable

namespace Link.Pokedex.Api.Infrastructure.Data.Entities
{
    public partial class PokemonTipo
    {
        public int IdPokemon { get; set; }
        public int IdTipo { get; set; }

        public virtual Pokemon IdPokemonNavigation { get; set; }
        public virtual Tipo IdTipoNavigation { get; set; }
    }
}