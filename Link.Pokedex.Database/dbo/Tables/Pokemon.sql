CREATE TABLE [dbo].[Pokemon] (
    [IdPokemon]       INT            IDENTITY (1, 1) NOT NULL,
    [Nombre]          VARCHAR (50)   NULL,
    [Altura]          NUMERIC (5, 2) NULL,
    [Categoria]       VARCHAR (50)   NULL,
    [Peso]            NUMERIC (5, 2) NULL,
    [Habilidad]       VARCHAR (50)   NULL,
    [Sexo]            VARCHAR (3)    NULL,
    [Ps]              INT            NULL,
    [Ataque]          INT            NULL,
    [Defensa]         INT            NULL,
    [AtaqueEspecial]  INT            NULL,
    [DefensaEspecial] INT            NULL,
    [Velocidad]       INT            NULL,
    [Imagen]          VARCHAR (50)   NULL,
    CONSTRAINT [PK_Pokemon] PRIMARY KEY CLUSTERED ([IdPokemon] ASC)
);

