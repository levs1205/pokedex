CREATE TABLE [dbo].[Tipo] (
    [IdTipo]     INT          IDENTITY (1, 1) NOT NULL,
    [Nombre]     VARCHAR (50) NULL,
    [ClaseColor] VARCHAR (50) NULL,
    CONSTRAINT [PK_Tipo] PRIMARY KEY CLUSTERED ([IdTipo] ASC)
);

