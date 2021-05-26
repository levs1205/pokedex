CREATE TABLE [dbo].[PokemonDebilidad] (
    [IdPokemon]       INT NOT NULL,
    [IdTipoDebilidad] INT NOT NULL,
    CONSTRAINT [FK_PokemonDebilidad_Pokemon] FOREIGN KEY ([IdPokemon]) REFERENCES [dbo].[Pokemon] ([IdPokemon]),
    CONSTRAINT [FK_PokemonDebilidad_Tipo] FOREIGN KEY ([IdTipoDebilidad]) REFERENCES [dbo].[Tipo] ([IdTipo])
);

