export class Constants {

  static readonly TITLE = 'Incentivos';

  static Routes = class {
    static readonly LOGIN = '/security/login';
    static readonly SCHEDULE = '/main/schedule';
    static readonly HOME = '/main/bienvenida';
    static readonly REPORT = '/main/report-principal';
    static readonly START = '';
  };

  static SistemaUrl = class {
    static readonly POKEDEX_URL = "pokedexUrl";
  }

  static IdentityValidation = class {
    static readonly INVALID_USERNAME_OR_PASSWORD = 'invalid_username_or_password';
    static readonly INVALID_CLIENT = 'invalid_client';
  };

  static PageSize = class {
    static readonly pageSizeOptions: number[] = [5, 10, 15, 30, 50, 100];
    static readonly pageSizeDefault: number = 5;
  };

  static Roles = class {
    static readonly COLABORADOR = 1;
    static readonly ADMINISTRADOR = 2;
    static readonly AGENTESEGURIDAD = 3;
  };


  static Messages = class {
    static readonly DEBE_INGRESAR_DATOS_OBLIGATORIOS = 'DEBE INGRESAR LOS DATOS OBLIGATORIOS.';
    static readonly ERROR_NO_CONTROLADO = 'Ha ocurrido un error al tratar de procesar la acción requerida.';
    static readonly NO_POSIBLE_VERIFICAR_CREDENCIALES_CONTACTE_ADMINISTRADOR_SISTEMAS = 'No ha sido posible verificar las credenciales, por favor contacte al administrador de sistemas.';
    static readonly USUARIO_PASSWORD_INCORRECTOS = 'Usuario y/o password incorrectos.';
    static readonly CONFIGURACION_INCORRECTA_IDENTITY_SERVER = 'La configuración con el servidor de identidad es incorrecta.';
    static readonly ASIGNACION_GUARDADA_EXITOSAMENTE = 'La asignación ha sido guardada exitosamente!.';
    static readonly ASIGNACION_ELIMINADA_EXITOSAMENTE = 'La asignación ha sido eliminada exitosamente!.';
    static readonly ASIGNACION_MASIVA_ELIMINADA_EXITOSAMENTE = 'Las asignaciones fueron eliminados exitosamente!.';
    static readonly DESEA_ASIGNACION_MASIVA_ELIMINADA_EXITOSAMENTE = '¿Está seguro que desea eliminar todas las asignaciones?';
    static readonly PLANTILLA_MENSAJE_GUARDADO_EXITOSAMENTE = 'Se ha registrado la plantilla de mensaje satisfactoriamente!.';
    static readonly MENSAJE_ENVIADO_EXITOSAMENTE = 'Se ha enviado el mensaje satisfactoriamente!.';
    static readonly PLANTILLA_MENSAJE_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado la plantilla del mensaje satisfactoriamente!.';
    static readonly PLANTILLA_MENSAJE_ACTUALIZADO_EXITOSAMENTE = 'Se ha actualizado la plantilla del mensaje satisfactoriamente!.';
    static readonly DESEA_ELIMINAR_PLANTILLA_MENSAJE = '¿Está seguro que desea eliminar la plantilla del mensaje?';
    static readonly DEBE_ELEGIR_AMBITO_CORRECTO = 'Debe elegir un ámbito correcto';
    static readonly INFORMACION_PROCESADA_EXITOSAMENTE = 'La información ha sido procesada exitosamente!';
    static readonly NO_SE_ENCONTRARON_ASIGNACIONES_REALIZADAS = 'No se encontraron asignaciones realizadas';
    static readonly DEBE_SELECCIONAR_AUNQUE_SEA_UNA_FILA = 'Debe seleccionar aunque sea una fila';
    static readonly DEBE_SELECCIONAR_AUNQUE_SOLO_UNA_FILA = 'Debe seleccionar solo una fila';
    static readonly DEBE_SELECCIONAR_AUNQUE_SEA_UNA_ENCUESTA = 'Debe seleccionar aunque sea una encuesta';
    static readonly DEBE_SELECCIONAR_UNA_ENCUESTADORA = 'Debe seleccionar una encuestadora';
    static readonly NO_SE_ENCONTRO_NINGUN_PERIODO_ACTIVO = 'No se encontró ningún periodo activo';
    static readonly FECHA_FINAL_NO_PUEDE_SER_MAYOR_A_FECHA_INICIAL = 'La fecha final no puede ser mayor a la fecha inicial';
    static readonly DEBE_SELECCIONAR_AL_MENOS_UNA_CONDICION = 'Debe seleccionar al menos una condición';
    static readonly TIPO_CODIFICACION_GUARDADO_EXITOSAMENTE = 'Se ha registrado el tipo de codificación satisfactoriamente!.';
    static readonly TIPO_CODIFICACION_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado el tipo de codificación satisfactoriamente!.';
    static readonly TIPO_CODIFICACION_ACTUALIZADO_EXITOSAMENTE = 'Se ha actualizado el tipo de codificación satisfactoriamente!.';
    static readonly DESEA_ELIMINAR_TIPO_CODIFICACION = '¿Está seguro que desea eliminar el tipo de codificación?';
    static readonly CODIFICADORES_REGISTRADOS_EXITOSAMENTE = 'Se han registrado los codificadores satisfactoriamente!.';
    static readonly PRODUCTOS_PENDIENTES_ASIGNADOS_EXITOSAMENTE = 'Se han asignado los productos pendientes satisfactoriamente!.';
    static readonly NO_SE_ENCONTRARON_REGISTROS = 'No se encontraron registros';
    static readonly DESEA_GUARDAR_CAMBIOS_REALIZADOS = '¿Desea guardar los cambios realizados?';
    static readonly NO_SE_ENCUENTRAN_MAS_PRODUCTOS_PARA_CODIFICAR = 'No se encuentran más productos para codificar';
    static readonly DEBE_SELECCIONAR_UN_PRODUCTO_PARA_CODIFICAR = 'Debe seleccionar un producto para codificar';
    static readonly SE_HA_CODIFICADO_PRODUCTO_EXITOSAMENTE = 'Se ha codificado el producto exitosamente!';
    static readonly CODIFICADOR_CON_REGISTROS_CAPTURADOS_PENDIENTE_CODIFICACION = 'Codificador con registros capturados pendientes de codificación';
    static readonly INCENTIVO_GUARDADO_EXITOSAMENTE = 'Se ha registrado el incentivo satisfactoriamente!.';
    static readonly INCENTIVO_ACTUALIZADO_EXITOSAMENTE = 'Se ha actualizado el incentivo satisfactoriamente!.';
    static readonly CODIGO_HOGAR_INVALIDO = 'El código del hogar es inválido.';
    static readonly ID_PRODUCTO_PAIS_INVALIDO = 'El Id del producto país es inválido.';
    static readonly ID_PRODUCTO_PAIS_UNIDADES_INVALIDO = 'El Id del producto país y/o las unidades son inválidos.';
    static readonly PRODUCTO_GUARDADO_EXITOSAMENTE = 'Se ha registrado el producto satisfactoriamente!.';
    static readonly COMPLETE_DATOS_REQUERIDOS = 'Debe completar los datos requeridos.';
    static readonly DATOS_GUARDADOS_SATISFACTORIAMENTE = 'Los datos han sido guardados satisfactoriamente!.';
    static readonly REGISTRO_DUPLICADO_SATISFACTORIAMENTE = 'Se ha duplicado el registro satisfactoriamente!.';
    static readonly DESEA_ELIMINAR_REGISTROS_SELECCIONADOS = '¿Está seguro que desea eliminar los registros seleccionados?';
    static readonly DESEA_ELIMINAR_REGISTROS_SELECCIONADO = '¿Está seguro que desea eliminar el registro seleccionado?';
    static readonly DESEA_ELIMINAR_PRODUCTO_CAPTURADO_DESDE_TABLET = '¿Está seguro que desea eliminar el producto capturado desde tablet?';
    static readonly REGISTROS_ELIMINADOS_SATISFACTORIAMENTE = 'Los registros fueron eliminados satisfactoriamente!.';
    static readonly DESEA_FINALIZAR_ENCUESTA = '¿Desea finalizar la encuesta?';
    static readonly ENCUESTA_FINALIZADA_SATISFACTORIAMENTE = 'Encuesta finalizada satisfactoriamente!.';
    static readonly AL_MENOS_UN_INTEGRANTE_TIENE_QUE_SER_DUENIO_UNIDAD = 'Al menos un integrante tiene que ser dueño de la unidad';
    static readonly NO_ES_POSIBLE_TENER_CHECK_INDIVIDUAL_CON_COMPARTIDO = 'No es posible tener asignado el checkbox Individual y Compartido Principal o Compartido a la misma vez';
    static readonly NO_ES_POSIBLE_TENER_MAS_DE_UN_CHECK_INDIVIDUAL_Y_COMPARTIDO = 'No es posible tener asignado más de un checkbox Individual y/o más de un checkbox Compartido Principal';
    static readonly NO_ES_POSIBLE_TENER_CHECK_PRINCIPAL_SIN_COMPARTIDO = 'El checkbox Compartido Principal debe tener al menos un checkbox Compartido asignado';
    static readonly NO_ES_POSIBLE_TENER_ESA_COMBINACION_ADQUISICION_INTEGRANTE = 'No es posible tener esa combinación en las adquisiciones de los integrantes de la familia';
    static readonly NO_SE_ENCONTRO_ENCUESTA_PARA_HOGAR_SELECCIONADO = 'No se encontró una encuesta generada para el hogar seleccionado';
    static readonly NO_SE_ENCONTRO_ENCUESTA_INGRESADA = 'No se encontró la encuesta ingresada';
    static readonly DEBE_INGRESAR_ENCUESTAS_PARA_PROCESAR = 'Debe seleccionar encuestas para procesar';
    static readonly TOTAL_UNIDADES_CUESTIONARIO_NO_PUEDE_SER_CERO = 'El total de unidades del cuestionario no puede ser cero';
    static readonly TOTAL_UNIDADES_OBSERVACIONES_NO_PUEDE_SER_MAYOR_AL_TOTAL_UNIDADES_CUESTIONARIO = 'El total de unidades con observaciones no puede ser mayor al total de unidades del cuestionario';
    static readonly DEBE_SELECCIONAR_UNA_MARCA = 'Debe seleccionar una marca';
    static readonly ESTADO_VALORIZACION_NO_PUEDE_SER_CONFIGURANDO = 'El estado de valorización no puede ser CONFIGURANDO';
    static readonly FACTOR_FLYER_NO_PUEDE_SER_MAYOR_A_UNO = 'El Factor Flyer no puede ser mayor a 1';
    static readonly LISTADO = 'Listado';
    static readonly COMPONENTE_CREADO_SATISFACTORIAMENTE = 'Componente creado satisfactoriamente!';
    static readonly PRODUCTO_AGREGADO_SATISFACTORIAMENTE = 'Producto agregado satisfactoriamente!';
    static readonly PRODUCTO_EDITADO_SATISFACTORIAMENTE = 'Producto editado satisfactoriamente!';
    static readonly NO_SE_ENCONTRO_NINGUN_PERIODO_ESTUDIO_PARA_VENTA_TRADICIONAL = 'No se encontró ningún período de estudio para venta tradicional';
    static readonly LOS_PRODUCTOS_SELECCIONADOS_NO_TIENEN_LA_MISMA_CAPACIDAD = 'Los productos seleccionados no tienen la misma capacidad';
    static readonly REGISTRO_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado el registro satisfactoriamente!.';
    static readonly DEBE_SELECCIONAR_UN_CRITERIO = 'Debe seleccionar un criterio';
    static readonly NO_EXISTEN_CUESTIONARIOS_PARA_EL_FILTRO_SELECCIONADO = 'No existen cuestionarios para el filtro seleccionado.';
    static readonly DEBE_MODIFICAR_AUNQUE_SEA_UN_REGISTRO = 'Debe modificar aunque sea un registro.';
    static readonly VALORES_DEBEN_SER_TIPO_NUMERICO = 'Los valores de las celdas deben ser de tipo numérico.';
    static readonly DESEA_COPIAR_LOS_PRECIOS_DE_LA_PRIMERA_DIGITACION = '¿Desea copiar los precios de la primera digitación?';
    static readonly ACCESOS_REGISTRADOS_SATISFACTORIAMENTE = 'Accesos registrados satisfactoriamente!';
    static readonly ARCHIVO_A_IMPORTAR_DEBE_TENER_EXTENSION_XLS_XLSX = 'El archivo a importar debe tener una extensión .xls o .xlsx';
    static readonly NO_SE_ENCONTRO_UN_TIPO_CODIFICACION_PARA_PERIODO_SELECCIONADO = 'No se encontró un tipo de codificación para el periodo seleccionado';
    static readonly FECHA_INICIAL_NO_PUEDE_SER_MAYOR_A_FECHA_FINAL = 'La fecha inicial no puede ser mayor a la fecha final';
    static readonly EXISTE_INFORMACION_IMPORTADA_DESEA_REEMPLAZAR = 'Ya existe información importada. ¿Desea reemplazar los datos?';
    static readonly NO_ES_POSIBLE_CREAR_EL_PERIODO_INGRESADO = 'No es posible crear el periodo ingresado.';
    static readonly SE_CREO_PERIODO = 'Se creó el Periodo.';
    static readonly SE_ACTUALIZARON_DATOS_DEL_PERIODO = 'Se actualizaron los datos del Periodo.';
    static readonly NO_ES_POSIBLE_ACTUALIZAR_EL_PERIODO_SELECCIONADO = 'No es posible actualizar el periodo seleccionado.';
    static readonly INGRESE_PERIODO_VALIDO = 'Ingrese un periodo válido.';
    static readonly DEBE_SELECCIONAR_AUNQUE_SEA_UN_TIPO_FUENTE_DATO = 'Debe seleccionar aunque sea un tipo de fuente de dato';
    static readonly GENERE_DATOS_GRILLA = 'Genere los datos en la grilla.';
    static readonly SE_INGRESO_LA_POBLACION = 'Se ingresó la población.';
    static readonly DEBE_SELECCIONAR_UNA_ASIGNACION_DINAMICA = 'Debe seleccionar una asignación dinámica.';
    static readonly DEBE_SELECCIONAR_UN_REGISTRO_DETALLE_ASIGNACION_DINAMICA = 'Debe seleccionar un registro del detalle de la asignación dinámica.';
    static readonly ENCUESTA_CONTIENE_PRODUCTOS_TOMADOS_TABLET_SIN_CODIFICAR = 'Encuesta contiene productos tomados por TABLET sin codificar.';
    static readonly VALIDAR_RANGO_PAGINAS = 'Página HASTA debe ser mayor que página DESDE';
    static readonly IGUALDAD_RANGO_PAGINAS = 'Rangos de Página deben ser diferentes';
    static readonly CAMPOSNEGATIVOS_O_INCOMPLETOS = 'No se permiten valores negativos o campos requeridos incompletos';
    static readonly VALIDAR_DIGITACION_VENTA_DIRECTA_TRADICIONAL = 'El producto ya esta asignado a esta fuente de datos.¿Desea de todas formas asignar?'
    static readonly REEMPLAZAR_PRODUCTO_SURVEY_CONSISTENCY = '¿Está seguro de reemplazar el registro seleccionado?'
  };

  static MessageDependiente = class {
    static readonly ERROR_PERSONAL_VINCULO = 'Se debe seleccionar el vinculo con el dependiente.';
    static readonly ERROR_NOMBRES = 'Debe ingresar el nombre.';
    static readonly ERROR_APELLIDO_PATERNO = 'Debe ingresar el apellido paterno .';
    static readonly ERROR_APELLIDO_MATERNO = 'Debe ingresar el apellido materno.';
    static readonly ERROR_FECHA_NACIMIENTO = 'Debe ingresar la fecha de nacimiento.';
    static readonly ERROR_GENERO = 'Debe seleccionar el genero.';
    static readonly ERROR_TIPO_DOCUMENTO = 'Debe seleccionar el tipo de documento.';
    static readonly ERROR_NRO_DOCUMENTO = 'Debe ingresar el numero de documento.';
    static readonly ERROR_TIPO_DEPENDIENTE = 'Debe seleccionar el tipo de dependiente.';
    static readonly ERROR_NRO_CONTACTO = 'Debe ingresar el numero de contacto.';
  };

  static MessageLaboral = class {
    static readonly ERROR_EMPRESA = 'Debe ingresa la empresa.';
    static readonly ERROR_CARGO = 'Debe ingresar el cargo.';
    static readonly ERROR_FECHA = 'La Fecha de Inicio debe ser menor a la Fecha Fin.';
  };

  static MessageEducacion = class {
    static readonly ERROR_TIPO_INSTRUCCION = 'Debe seleccionar el tipo de instruccion.';
    static readonly ERROR_PROFESION = 'Debe seleccionar la profesion.';
    static readonly ERROR_PAIS = 'Debe seleccionar el pais.';
    static readonly ERROR_ESTADO = 'Debe seleccionar el estado.';
    static readonly ERROR_FECHA = 'La Fecha de Inicio debe ser menor a la Fecha Fin.';
  };

  static MessageService = class {
    static readonly SUCCESS = 'success'; // Verde
    static readonly INFORMATION = 'info'; // Celeste
    static readonly WARNING = 'warn'; // Naranja
    static readonly ERROR = 'error'; // Rojo
  };


  static FileExtension = class {
    static readonly XLS = 'xls';
    static readonly XLSX = 'xlsx';
  };

  static ExportFormat = class {
    static readonly PDF = { id: 'PDF', desc: 'PDF', ext: "pdf" };
    static readonly EXCEL2007 = { id: 'EXCELOPENXML', desc: 'EXCEL', ext: "xlsx" };
  };

  static MasterCodes = class {
    static readonly MENSAJES = 10;
    static readonly ICONOS = 30;
  };

  static Maestra = class {
    static readonly ESTADO_CIVIL = 10;
    static readonly GENERO = 11;
    static readonly GRADO_ACADEMICO = 12;
    static readonly PERSONAL_RELACION_LABORAL = 13;
    static readonly TIPO_VIA = 14;
    static readonly PERSONAL_VINCULO = 15;
    static readonly TIPO_DOCUMENTO = 16;
    static readonly TIPO_KIT_INGRESO = 17;
    static readonly TIPO_SECCION = 18;
    static readonly ESTADO_KIT = 19;
    static readonly ESTADO_INFORMACION = 20;
    static readonly TIPO_DATO_KIT = 21;
    static readonly TIPO_DEPENDIENTE = 22;
    static readonly BANCOS = 24;
    static readonly TIPO_MONEDA = 25;
    static readonly TIPO_CUENTA = 26;
    static readonly TIPO_ZONA = 27;
    static readonly CARRERA_PROFESIONAL = 28;
    static readonly ESTADO_ACADEMICO = 29;
    static readonly ESTADO_SEMAFORO = 30;
    static readonly LISTA_PAISES = 31;
    static readonly LISTA_AFP = 32;
    static readonly LISTA_COMISIONES = 33;
  };

  static Secciones = class {
    static readonly PRINCIPAL = 2;
    static readonly FAMILIAR = 3;
    static readonly EDUCACION = 4;
    static readonly LABORAL = 5;
    static readonly CTS = 6;
    static readonly RENTA_5TA_CATEGORIA = 7;
    static readonly AFP = 8;
    static readonly SISTEMA_PENSIONES = 9;
    static readonly CUENTA_HABERES = 10;
    static readonly EPS = 11;
    static readonly FORMATOS_AUTORIZACION = 12;
    static readonly DECLARACIONES_JURADAS = 13;
    static readonly DOCUMENTOS = 14;
  };

  static TipoDependiente = class {
    static readonly FAMILIAR = 2201;
    static readonly EMERGENCIA = 2202;
  };

  static Keys = class {
    static readonly KIT_INGRESO = 'kitIngreso';
  }

  static CamposPrincipal = class {
    static readonly TIPO_DOCUMENTO =  'TIPO_DOCUMENTO';
    static readonly NRO_DOCUMENTO =  'NRO_DOCUMENTO';
    static readonly ESTADO_CIVIL =  'ESTADO_CIVIL';
    static readonly GENERO =  'GENERO';
    static readonly FECHA_NACIMIENTO =  'FECHA_NACIMIENTO';
    static readonly LUGAR_NACIMIENTO =  'LUGAR_NACIMIENTO';
    static readonly DEPARTAMENTO =  'DEPARTAMENTO';
    static readonly PROVINCIA =  'PROVINCIA';
    static readonly DISTRITO =  'DISTRITO';
    static readonly CORREO =  'CORREO';
    static readonly TIPO_ZONA =  'TIPO_ZONA';
    static readonly NOMBRE_ZONA =  'NOMBRE_ZONA';
    static readonly TIPO_VIA =  'TIPO_VIA';
    static readonly NOMBRE_VIA =  'NOMBRE_VIA';
    static readonly NUMERO_VIA =  'NUMERO_VIA';
    static readonly INTERIOR =  'INTERIOR';
    static readonly CODIGO_POSTAL =  'CODIGO_POSTAL';
    static readonly REFERENCIA =  'REFERENCIA';
    static readonly FIRMA =  'FIRMA';
    static readonly PAIS_DOCUMENTO = 'PAIS_DOCUMENTO';
    static readonly FOTO = 'ARCHIVO_FOTO';
  }

  static CamposCTS = class {
    static readonly BANCO =  'BANCO_CTS';
    static readonly TIPO_MONEDA =  'TIPO_MONEDA_CTS';
    static readonly ACEPTACION =  'CHECK_CTS';
  }

  static CamposAFP = class {
    static readonly TIPO_COMISION_AFP = 'TIPO_COMISION_AFP'
    static readonly CODIGO_CUPPS_AFP = 'CODIGO_CUPPS_AFP'
    static readonly AFP_AFP = 'AFP_AFP'
    // static readonly LABORO_ULTIMO_ANIO =  'LABORO_ULTIMO_ANIO';
    static readonly ACEPTACION_ANTECEDENTES =  'CHECK_ACEPTACION_AFP';
    static readonly ACEPTACION_BOLETIN =  'CHECK_BOLETIN_APF';
    static readonly ACEPTACION_CONSTANCIA =  'CHECK_CONSTANCIA_AFP';
    static readonly ARCHIVO_CONTRATO =  'CHECK_FOTOCOPIA_AFP';
  }

  static Campos5taCategoria = class {
    static readonly ARCHIVO_RETECIONES =  'ARCHIVO_RETECIONES';
    static readonly LABORO_ULTIMO_ANIO =  'LABORO_5TA';
    static readonly ACEPTACION =  'CHECK_5TA';
  }

  static CamposDocumentos = class {
    static readonly ARCHIVO_EVALUACION_SEGURIDAD =  'ARCHIVO_EVALUACION_SEGURIDAD';
    static readonly ACEPTACION_CODIGO_ETICA =  'CHECK_CODIGO_DO';
    static readonly ACEPTACION_RECOMENDACIONES =  'CHECK_RECOMENDACIONES_DO';
    static readonly ARCHIVO_ANTECEDENTES_PENALES =  'ARCHIVO_ANT_PENALES';
    static readonly ARCHIVO_ANTECEDENTES_POLICIALES =  'ARCHIVO_ANT_POLICIALES';
    static readonly ARCHIVO_CURRICULUM_VITAE =  'ARCHIVO_CURRICULUM';
    static readonly ARCHIVO_GRADO_BACHILLER =  'ARCHIVO_BACHILLER';
    static readonly ARCHIVO_CERTIFICADOS_LABORALES =  'ARCHIVO_CERTI_LABORAL';
  }

  static CamposEPS = class {
    static readonly ACEPTA_EPS =  'CHECK_EPS';
    static readonly ANEXO_EPS =  'ANEXO_EPS';
    static readonly SOLICITUD_AFILIACION =  'SOLICITUD_AFILIACION';
    static readonly CONSTANCIA_EPS =  'CONSTANCIA_EPS';
    static readonly DECLARACION_JURADA =  'CHECK_NO_AFI_EPS';
  }

  static CamposFormatosAutorizacion = class {
    static readonly ACEPTA_DESCUENTO_REMUNERACION =  'CHECK_ACEPTAR_FA';
    static readonly ACEPTA_REMISION_BOLETA =  'CHECK_BOLETA_FA';
    static readonly ACEPTA_USO_IMAGEN =  'CHECK_AUTORIZACION_FA';
  }

  static CamposDeclaracionJurada = class {
    static readonly ACEPTA_REGLAMENTO_COMPANIA =  'CHECK_REGLA_DJ';
    static readonly ACEPTA_PREVENCION_SANCION =  'CHECK_POLITICA_DJ';
    static readonly ACEPTA_REGLAMENTO_SEGURIDAD = 'CHECK_SEGURIDAD_DJ';
    static readonly ACEPTA_ESTADO_SALUD = 'CHECK_ESTADO_SALUD_DJ';
    static readonly ARCHIVO_ESTADO_SALUD = 'ARCHIVO_ESTADO_SALUD';
  }

  static CamposCuentaHaberes = class {
    static readonly BANCO =  'BANCO_CH';
    static readonly CUENTA =  'CUENTA_CH';
    static readonly TIPO_CUENTA =  'TIPO_CUENTA_CH';
    static readonly ACEPTACION_FORMATO =  'CHECK_ACEPTACION_CH';
    static readonly VOUCHER_ORIGINAL =  'VOUCHER_ORIGINAL';
    static readonly ACEPTACION_SOLICITUD =  'CHECK_ACEP_SOLI_CH';
  }

  static CamposPensiones = class {
    static readonly ACEPTACION_CONSTANCIA =  'CHECK_ACEPTACION_SP';
    static readonly ACEPTACION_FORMATO =  'ACEPTACION_FORMATO';
    static readonly ARCHIVO_ANEXO =  'ARCHIVO_ANEXO';
  }

  static ArchivosAFP = class {
    static readonly CONTRATO = 1;
  }

  static ArchivosRenta5ta = class {
    static readonly CERTIFICADO_RENTA_QUINTA = 1;
  }

  static ArchivosDocumentos = class {
    static readonly EVALUACION_INDUCCION_SEGURIDAD = 1;
    static readonly CERTIFICADO_ANTECEDENTES_PENALES = 2;
    static readonly CERTIFICADO_ANTECEDENTES_POLICIALES = 3;
    static readonly CURRICULUM_VITAE = 4;
    static readonly GRADO_BACHILLER = 5;
    static readonly CERTIFICADOS_LABORALES = 6;
  }

  static ArchivosEPS = class {
    static readonly ANEXO_DOCUMENTO_EPS = 1;
    static readonly SOLICITUD_AFILIACION = 2;
    static readonly CONSTANCIA_EPS = 3;
  }

  static ArchivosCuentaHaberes = class {
    static readonly VOUCHER_ORIGINAL = 1;
  }

  static ArchivosPensiones = class {
    static readonly ANEXO = 1;
  }

  static ArchivosDeclaraciones = class {
    static readonly DECLARACION_JURADA_SALUD = 1;
  }

  static SemaforoMenu = class {
    static readonly TERMINADO =  3001;
    static readonly EN_PROCESO =  3002;
    static readonly PENDIENTE =  3003;
  }
 
  static convertToBoolean(input: string): boolean | undefined {
    try {
        return JSON.parse(input);
    }
    catch (e) {
        return undefined;
    }
  }

  static EstadoInfoMa = class {
    static readonly INGRESADO = 2001;
    static readonly ACTUALIZADO = 2002;
    static readonly ELIMINADO = 2003;
    static readonly INGRESADO_A_API = 2004;
  }

  static EstadoKitIngreso = class {
    static readonly CERRADO = 1902;
  }

  static CodigoDocumento = class {
    static readonly SOLICITUD_CTS = "01";
    static readonly RENTA_5TA = "01";
    static readonly DECLARACION_AFP = "01";
    static readonly BOLETIN_SPP_SNP = "01";
    static readonly COMUNICACION_PAGO_HABERES = "01";
    static readonly APERTURA_CUENTA_HABERES = "02";
    static readonly DOCUMENTO_EPS = "01";
    static readonly DELCARACION_EPS = "04";
    static readonly AUTORIZACION_DESCUENTO = "01";
    static readonly AUTORIZACION_BOLETA = "02";
    static readonly AUTORIZACION_IMAGEN = "03";
    static readonly DECLARACION_REGLAMENTO_INTERNO = "01";
    static readonly DECLARACION_PREVENCION_HS = "02";
    static readonly DECLARACION_SALUD_TRABAJO = "03";
    static readonly CODIGO_ETICA = "02";
    static readonly RECOMENDACIONES_MATERIA = "03";
  }
}
