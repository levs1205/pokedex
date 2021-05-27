using Newtonsoft.Json;
using System;
using System.IO;

namespace Link.Pokedex.Utility
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new PokedexContext())
            {
                using (StreamReader r = new StreamReader("pokedex.json"))
                {
                    string json = r.ReadToEnd();
                    dynamic array = JsonConvert.DeserializeObject(json);
                    foreach (var item in array)
                    {
                        int idpokemon = item.id;

                        var std = new Pokemon()
                        {
                            IdPokemon = (int)item.id,
                            Nombre = item.name.english,
                            Altura = (decimal?)0.7,
                            Categoria = "Dragon",
                            Peso = (decimal?)5.6,
                            Habilidad = "Disparo",
                            Sexo = "M,H",
                            Ps = (int?)item.basepk.HP,
                            Ataque = (int?)item.basepk.Attack,
                            Defensa = (int?)item.basepk.Defense,
                            AtaqueEspecial = (int?)item.basepk.SpAttack,
                            DefensaEspecial = (int?)item.basepk.SpDefense,
                            Velocidad = (int?)item.basepk.Speed,
                            Imagen = ((int)(item.id)).ToString("000")
                        };

                        context.Pokemon.Add(std);
                    }
                }
                context.SaveChanges();
            }
        }
    }
}
