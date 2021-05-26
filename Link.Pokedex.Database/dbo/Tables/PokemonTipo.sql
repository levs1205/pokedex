CREATE TABLE [dbo].[PokemonTipo] (
    [IdPokemon] INT NOT NULL,
    [IdTipo]    INT NOT NULL,
    CONSTRAINT [FK_PokemonTipo_Pokemon] FOREIGN KEY ([IdPokemon]) REFERENCES [dbo].[Pokemon] ([IdPokemon]),
    CONSTRAINT [FK_PokemonTipo_Tipo] FOREIGN KEY ([IdTipo]) REFERENCES [dbo].[Tipo] ([IdTipo])
);

