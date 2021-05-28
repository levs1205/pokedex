/*
Plantilla de script posterior a la implementación							
--------------------------------------------------------------------------------------
 Este archivo contiene instrucciones de SQL que se anexarán al script de compilación.		
 Use la sintaxis de SQLCMD para incluir un archivo en el script posterior a la implementación.			
 Ejemplo:      :r .\miArchivo.sql								
 Use la sintaxis de SQLCMD para hacer referencia a una variable en el script posterior a la implementación.		
 Ejemplo:      :setvar TableName miTabla							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
USE [Pokedex]
GO
SET IDENTITY_INSERT [dbo].[Pokemon] ON 
GO
INSERT [dbo].[Pokemon] ([IdPokemon], [Nombre], [Altura], [Categoria], [Peso], [Habilidad], [Sexo], [Ps], [Ataque], [Defensa], [AtaqueEspecial], [DefensaEspecial], [Velocidad], [Imagen]) VALUES (1, N'Bulbasaur', CAST(0.70 AS Numeric(5, 2)), N'Semilla', CAST(6.90 AS Numeric(5, 2)), N'Espesura', N'M,H', 3, 3, 3, 4, 4, 3, N'bulbasaur.png')
GO
INSERT [dbo].[Pokemon] ([IdPokemon], [Nombre], [Altura], [Categoria], [Peso], [Habilidad], [Sexo], [Ps], [Ataque], [Defensa], [AtaqueEspecial], [DefensaEspecial], [Velocidad], [Imagen]) VALUES (2, N'Charmander', CAST(0.60 AS Numeric(5, 2)), N'Lagartija
', CAST(8.50 AS Numeric(5, 2)), N'Mar Llamas', N'M,H', 3, 4, 3, 4, 3, 4, N'charmander.png')
GO
INSERT [dbo].[Pokemon] ([IdPokemon], [Nombre], [Altura], [Categoria], [Peso], [Habilidad], [Sexo], [Ps], [Ataque], [Defensa], [AtaqueEspecial], [DefensaEspecial], [Velocidad], [Imagen]) VALUES (3, N'Squirtle', CAST(0.50 AS Numeric(5, 2)), N'Tortuguita
', CAST(9.00 AS Numeric(5, 2)), N'Torrente', N'M,H', 3, 3, 4, 3, 4, 3, N'squirtle.png')
GO
INSERT [dbo].[Pokemon] ([IdPokemon], [Nombre], [Altura], [Categoria], [Peso], [Habilidad], [Sexo], [Ps], [Ataque], [Defensa], [AtaqueEspecial], [DefensaEspecial], [Velocidad], [Imagen]) VALUES (4, N'Pikachu', CAST(0.40 AS Numeric(5, 2)), N'Ratón', CAST(6.00 AS Numeric(5, 2)), N'Electricidad Estática', N'M,H', 3, 4, 3, 3, 3, 6, N'pikachu.png')
GO
SET IDENTITY_INSERT [dbo].[Pokemon] OFF
GO
SET IDENTITY_INSERT [dbo].[Tipo] ON 
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (1, N'Planta', N'bg-olive')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (2, N'Veneno', N'bg-fuchsia')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (3, N'Fuego', N'bg-orange')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (4, N'Agua', N'bg-primary')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (5, N'Psiquico', N'bg-pink')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (6, N'Volador', N'bg-primary')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (7, N'Hielo', N'bg-primary')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (8, N'Tierra', N'bg-gray-dark')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (9, N'Roca', N'bg-gray-dark')
GO
INSERT [dbo].[Tipo] ([IdTipo], [Nombre], [ClaseColor]) VALUES (10, N'Eléctrico', N'bg-warning')
GO
SET IDENTITY_INSERT [dbo].[Tipo] OFF
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (1, 3)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (1, 5)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (1, 6)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (1, 7)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (2, 4)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (2, 8)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (2, 9)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (3, 1)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (3, 10)
GO
INSERT [dbo].[PokemonDebilidad] ([IdPokemon], [IdTipoDebilidad]) VALUES (4, 8)
GO
INSERT [dbo].[PokemonTipo] ([IdPokemon], [IdTipo]) VALUES (1, 1)
GO
INSERT [dbo].[PokemonTipo] ([IdPokemon], [IdTipo]) VALUES (1, 2)
GO
INSERT [dbo].[PokemonTipo] ([IdPokemon], [IdTipo]) VALUES (2, 3)
GO
INSERT [dbo].[PokemonTipo] ([IdPokemon], [IdTipo]) VALUES (3, 4)
GO
INSERT [dbo].[PokemonTipo] ([IdPokemon], [IdTipo]) VALUES (4, 10)
GO
