using Link.Pokedex.Api.Application;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Link.Pokedex.Api.Infrastructure.Crosscutting.Dependencies
{
    public static class PokedexDependenciesConfiguration
    {
        public static IServiceCollection ConfigureDI(
       this IServiceCollection services)
        {
            ConfigureContainer(services);
            return services;
        }

        private static void ConfigureContainer(IServiceCollection services)
        {
            services.AddTransient<IPokemonAppService, PokemonAppService>();

        }
    }
}
