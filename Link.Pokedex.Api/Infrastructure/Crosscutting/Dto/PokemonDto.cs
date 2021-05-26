using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Infrastructure.Crosscutting.Dto
{
    public class PokemonDto
    {
        public string Nombre { get; set; }
        public decimal? Altura { get; set; }
        public string Categoria { get; set; }
        public decimal? Peso { get; set; }
        public string Habilidad { get; set; }
        public string Sexo { get; set; }
        public int? Ps { get; set; }
        public int? Ataque { get; set; }
        public int? Defensa { get; set; }
        public int? AtaqueEspecial { get; set; }
        public int? DefensaEspecial { get; set; }
        public int? Velocidad { get; set; }
        public string Imagen { get; set; }

        public List<TipoDto> Tipo { get; set; }
        public List<TipoDto> Debilidad { get; set; }
    }
}
