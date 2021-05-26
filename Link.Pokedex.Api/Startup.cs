using Arch.EntityFrameworkCore.UnitOfWork;
using Link.Pokedex.Api.Infrastructure.Crosscutting.Dependencies;
using Link.Pokedex.Api.Infrastructure.Crosscutting.Mapping;
using Link.Pokedex.Api.Infrastructure.Data.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Serialization;

namespace Link.Pokedex.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddDbContext<PokedexContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("PokedexDatabase")))
                .AddUnitOfWork<PokedexContext>();

            services.AddAutoMapper(typeof(MappingProfile));
            services.ConfigureDI();
            services.AddOptions();

            services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
            {
                builder
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .AllowAnyOrigin();
                //.AllowCredentials().WithOrigins(Configuration["ClientSettings:ClientUrl"]);
            }));

            services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
