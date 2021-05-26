"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.convertToBoolean = function (input) {
        try {
            return JSON.parse(input);
        }
        catch (e) {
            return undefined;
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
    Constants.TITLE = 'Incentivos';
    Constants.Routes = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.LOGIN = '/security/login',
        _a.SCHEDULE = '/main/schedule',
        _a.HOME = '/main/bienvenida',
        _a.REPORT = '/main/report-principal',
        _a.START = '',
        _a);
    Constants.SistemaUrl = (_b = /** @class */ (function () {
            function class_2() {
            }
            return class_2;
        }()),
        _b.POKEDEX_URL = "pokedexUrl",
        _b);
    Constants.IdentityValidation = (_c = /** @class */ (function () {
            function class_3() {
            }
            return class_3;
        }()),
        _c.INVALID_USERNAME_OR_PASSWORD = 'invalid_username_or_password',
        _c.INVALID_CLIENT = 'invalid_client',
        _c);
    Constants.PageSize = (_d = /** @class */ (function () {
            function class_4() {
            }
            return class_4;
        }()),
        _d.pageSizeOptions = [5, 10, 15, 30, 50, 100],
        _d.pageSizeDefault = 5,
        _d);
    Constants.Roles = (_e = /** @class */ (function () {
            function class_5() {
            }
            return class_5;
        }()),
        _e.COLABORADOR = 1,
        _e.ADMINISTRADOR = 2,
        _e.AGENTESEGURIDAD = 3,
        _e);
    Constants.Messages = (_f = /** @class */ (function () {
            function class_6() {
            }
            return class_6;
        }()),
        _f.DEBE_INGRESAR_DATOS_OBLIGATORIOS = 'DEBE INGRESAR LOS DATOS OBLIGATORIOS.',
        _f.ERROR_NO_CONTROLADO = 'Ha ocurrido un error al tratar de procesar la acción requerida.',
        _f.NO_POSIBLE_VERIFICAR_CREDENCIALES_CONTACTE_ADMINISTRADOR_SISTEMAS = 'No ha sido posible verificar las credenciales, por favor contacte al administrador de sistemas.',
        _f.USUARIO_PASSWORD_INCORRECTOS = 'Usuario y/o password incorrectos.',
        _f.CONFIGURACION_INCORRECTA_IDENTITY_SERVER = 'La configuración con el servidor de identidad es incorrecta.',
        _f.ASIGNACION_GUARDADA_EXITOSAMENTE = 'La asignación ha sido guardada exitosamente!.',
        _f.ASIGNACION_ELIMINADA_EXITOSAMENTE = 'La asignación ha sido eliminada exitosamente!.',
        _f.ASIGNACION_MASIVA_ELIMINADA_EXITOSAMENTE = 'Las asignaciones fueron eliminados exitosamente!.',
        _f.DESEA_ASIGNACION_MASIVA_ELIMINADA_EXITOSAMENTE = '¿Está seguro que desea eliminar todas las asignaciones?',
        _f.PLANTILLA_MENSAJE_GUARDADO_EXITOSAMENTE = 'Se ha registrado la plantilla de mensaje satisfactoriamente!.',
        _f.MENSAJE_ENVIADO_EXITOSAMENTE = 'Se ha enviado el mensaje satisfactoriamente!.',
        _f.PLANTILLA_MENSAJE_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado la plantilla del mensaje satisfactoriamente!.',
        _f.PLANTILLA_MENSAJE_ACTUALIZADO_EXITOSAMENTE = 'Se ha actualizado la plantilla del mensaje satisfactoriamente!.',
        _f.DESEA_ELIMINAR_PLANTILLA_MENSAJE = '¿Está seguro que desea eliminar la plantilla del mensaje?',
        _f.DEBE_ELEGIR_AMBITO_CORRECTO = 'Debe elegir un ámbito correcto',
        _f.INFORMACION_PROCESADA_EXITOSAMENTE = 'La información ha sido procesada exitosamente!',
        _f.NO_SE_ENCONTRARON_ASIGNACIONES_REALIZADAS = 'No se encontraron asignaciones realizadas',
        _f.DEBE_SELECCIONAR_AUNQUE_SEA_UNA_FILA = 'Debe seleccionar aunque sea una fila',
        _f.DEBE_SELECCIONAR_AUNQUE_SOLO_UNA_FILA = 'Debe seleccionar solo una fila',
        _f.DEBE_SELECCIONAR_AUNQUE_SEA_UNA_ENCUESTA = 'Debe seleccionar aunque sea una encuesta',
        _f.DEBE_SELECCIONAR_UNA_ENCUESTADORA = 'Debe seleccionar una encuestadora',
        _f.NO_SE_ENCONTRO_NINGUN_PERIODO_ACTIVO = 'No se encontró ningún periodo activo',
        _f.FECHA_FINAL_NO_PUEDE_SER_MAYOR_A_FECHA_INICIAL = 'La fecha final no puede ser mayor a la fecha inicial',
        _f.DEBE_SELECCIONAR_AL_MENOS_UNA_CONDICION = 'Debe seleccionar al menos una condición',
        _f.TIPO_CODIFICACION_GUARDADO_EXITOSAMENTE = 'Se ha registrado el tipo de codificación satisfactoriamente!.',
        _f.TIPO_CODIFICACION_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado el tipo de codificación satisfactoriamente!.',
        _f.TIPO_CODIFICACION_ACTUALIZADO_EXITOSAMENTE = 'Se ha actualizado el tipo de codificación satisfactoriamente!.',
        _f.DESEA_ELIMINAR_TIPO_CODIFICACION = '¿Está seguro que desea eliminar el tipo de codificación?',
        _f.CODIFICADORES_REGISTRADOS_EXITOSAMENTE = 'Se han registrado los codificadores satisfactoriamente!.',
        _f.PRODUCTOS_PENDIENTES_ASIGNADOS_EXITOSAMENTE = 'Se han asignado los productos pendientes satisfactoriamente!.',
        _f.NO_SE_ENCONTRARON_REGISTROS = 'No se encontraron registros',
        _f.DESEA_GUARDAR_CAMBIOS_REALIZADOS = '¿Desea guardar los cambios realizados?',
        _f.NO_SE_ENCUENTRAN_MAS_PRODUCTOS_PARA_CODIFICAR = 'No se encuentran más productos para codificar',
        _f.DEBE_SELECCIONAR_UN_PRODUCTO_PARA_CODIFICAR = 'Debe seleccionar un producto para codificar',
        _f.SE_HA_CODIFICADO_PRODUCTO_EXITOSAMENTE = 'Se ha codificado el producto exitosamente!',
        _f.CODIFICADOR_CON_REGISTROS_CAPTURADOS_PENDIENTE_CODIFICACION = 'Codificador con registros capturados pendientes de codificación',
        _f.INCENTIVO_GUARDADO_EXITOSAMENTE = 'Se ha registrado el incentivo satisfactoriamente!.',
        _f.INCENTIVO_ACTUALIZADO_EXITOSAMENTE = 'Se ha actualizado el incentivo satisfactoriamente!.',
        _f.CODIGO_HOGAR_INVALIDO = 'El código del hogar es inválido.',
        _f.ID_PRODUCTO_PAIS_INVALIDO = 'El Id del producto país es inválido.',
        _f.ID_PRODUCTO_PAIS_UNIDADES_INVALIDO = 'El Id del producto país y/o las unidades son inválidos.',
        _f.PRODUCTO_GUARDADO_EXITOSAMENTE = 'Se ha registrado el producto satisfactoriamente!.',
        _f.COMPLETE_DATOS_REQUERIDOS = 'Debe completar los datos requeridos.',
        _f.DATOS_GUARDADOS_SATISFACTORIAMENTE = 'Los datos han sido guardados satisfactoriamente!.',
        _f.REGISTRO_DUPLICADO_SATISFACTORIAMENTE = 'Se ha duplicado el registro satisfactoriamente!.',
        _f.DESEA_ELIMINAR_REGISTROS_SELECCIONADOS = '¿Está seguro que desea eliminar los registros seleccionados?',
        _f.DESEA_ELIMINAR_REGISTROS_SELECCIONADO = '¿Está seguro que desea eliminar el registro seleccionado?',
        _f.DESEA_ELIMINAR_PRODUCTO_CAPTURADO_DESDE_TABLET = '¿Está seguro que desea eliminar el producto capturado desde tablet?',
        _f.REGISTROS_ELIMINADOS_SATISFACTORIAMENTE = 'Los registros fueron eliminados satisfactoriamente!.',
        _f.DESEA_FINALIZAR_ENCUESTA = '¿Desea finalizar la encuesta?',
        _f.ENCUESTA_FINALIZADA_SATISFACTORIAMENTE = 'Encuesta finalizada satisfactoriamente!.',
        _f.AL_MENOS_UN_INTEGRANTE_TIENE_QUE_SER_DUENIO_UNIDAD = 'Al menos un integrante tiene que ser dueño de la unidad',
        _f.NO_ES_POSIBLE_TENER_CHECK_INDIVIDUAL_CON_COMPARTIDO = 'No es posible tener asignado el checkbox Individual y Compartido Principal o Compartido a la misma vez',
        _f.NO_ES_POSIBLE_TENER_MAS_DE_UN_CHECK_INDIVIDUAL_Y_COMPARTIDO = 'No es posible tener asignado más de un checkbox Individual y/o más de un checkbox Compartido Principal',
        _f.NO_ES_POSIBLE_TENER_CHECK_PRINCIPAL_SIN_COMPARTIDO = 'El checkbox Compartido Principal debe tener al menos un checkbox Compartido asignado',
        _f.NO_ES_POSIBLE_TENER_ESA_COMBINACION_ADQUISICION_INTEGRANTE = 'No es posible tener esa combinación en las adquisiciones de los integrantes de la familia',
        _f.NO_SE_ENCONTRO_ENCUESTA_PARA_HOGAR_SELECCIONADO = 'No se encontró una encuesta generada para el hogar seleccionado',
        _f.NO_SE_ENCONTRO_ENCUESTA_INGRESADA = 'No se encontró la encuesta ingresada',
        _f.DEBE_INGRESAR_ENCUESTAS_PARA_PROCESAR = 'Debe seleccionar encuestas para procesar',
        _f.TOTAL_UNIDADES_CUESTIONARIO_NO_PUEDE_SER_CERO = 'El total de unidades del cuestionario no puede ser cero',
        _f.TOTAL_UNIDADES_OBSERVACIONES_NO_PUEDE_SER_MAYOR_AL_TOTAL_UNIDADES_CUESTIONARIO = 'El total de unidades con observaciones no puede ser mayor al total de unidades del cuestionario',
        _f.DEBE_SELECCIONAR_UNA_MARCA = 'Debe seleccionar una marca',
        _f.ESTADO_VALORIZACION_NO_PUEDE_SER_CONFIGURANDO = 'El estado de valorización no puede ser CONFIGURANDO',
        _f.FACTOR_FLYER_NO_PUEDE_SER_MAYOR_A_UNO = 'El Factor Flyer no puede ser mayor a 1',
        _f.LISTADO = 'Listado',
        _f.COMPONENTE_CREADO_SATISFACTORIAMENTE = 'Componente creado satisfactoriamente!',
        _f.PRODUCTO_AGREGADO_SATISFACTORIAMENTE = 'Producto agregado satisfactoriamente!',
        _f.PRODUCTO_EDITADO_SATISFACTORIAMENTE = 'Producto editado satisfactoriamente!',
        _f.NO_SE_ENCONTRO_NINGUN_PERIODO_ESTUDIO_PARA_VENTA_TRADICIONAL = 'No se encontró ningún período de estudio para venta tradicional',
        _f.LOS_PRODUCTOS_SELECCIONADOS_NO_TIENEN_LA_MISMA_CAPACIDAD = 'Los productos seleccionados no tienen la misma capacidad',
        _f.REGISTRO_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado el registro satisfactoriamente!.',
        _f.DEBE_SELECCIONAR_UN_CRITERIO = 'Debe seleccionar un criterio',
        _f.NO_EXISTEN_CUESTIONARIOS_PARA_EL_FILTRO_SELECCIONADO = 'No existen cuestionarios para el filtro seleccionado.',
        _f.DEBE_MODIFICAR_AUNQUE_SEA_UN_REGISTRO = 'Debe modificar aunque sea un registro.',
        _f.VALORES_DEBEN_SER_TIPO_NUMERICO = 'Los valores de las celdas deben ser de tipo numérico.',
        _f.DESEA_COPIAR_LOS_PRECIOS_DE_LA_PRIMERA_DIGITACION = '¿Desea copiar los precios de la primera digitación?',
        _f.ACCESOS_REGISTRADOS_SATISFACTORIAMENTE = 'Accesos registrados satisfactoriamente!',
        _f.ARCHIVO_A_IMPORTAR_DEBE_TENER_EXTENSION_XLS_XLSX = 'El archivo a importar debe tener una extensión .xls o .xlsx',
        _f.NO_SE_ENCONTRO_UN_TIPO_CODIFICACION_PARA_PERIODO_SELECCIONADO = 'No se encontró un tipo de codificación para el periodo seleccionado',
        _f.FECHA_INICIAL_NO_PUEDE_SER_MAYOR_A_FECHA_FINAL = 'La fecha inicial no puede ser mayor a la fecha final',
        _f.EXISTE_INFORMACION_IMPORTADA_DESEA_REEMPLAZAR = 'Ya existe información importada. ¿Desea reemplazar los datos?',
        _f.NO_ES_POSIBLE_CREAR_EL_PERIODO_INGRESADO = 'No es posible crear el periodo ingresado.',
        _f.SE_CREO_PERIODO = 'Se creó el Periodo.',
        _f.SE_ACTUALIZARON_DATOS_DEL_PERIODO = 'Se actualizaron los datos del Periodo.',
        _f.NO_ES_POSIBLE_ACTUALIZAR_EL_PERIODO_SELECCIONADO = 'No es posible actualizar el periodo seleccionado.',
        _f.INGRESE_PERIODO_VALIDO = 'Ingrese un periodo válido.',
        _f.DEBE_SELECCIONAR_AUNQUE_SEA_UN_TIPO_FUENTE_DATO = 'Debe seleccionar aunque sea un tipo de fuente de dato',
        _f.GENERE_DATOS_GRILLA = 'Genere los datos en la grilla.',
        _f.SE_INGRESO_LA_POBLACION = 'Se ingresó la población.',
        _f.DEBE_SELECCIONAR_UNA_ASIGNACION_DINAMICA = 'Debe seleccionar una asignación dinámica.',
        _f.DEBE_SELECCIONAR_UN_REGISTRO_DETALLE_ASIGNACION_DINAMICA = 'Debe seleccionar un registro del detalle de la asignación dinámica.',
        _f.ENCUESTA_CONTIENE_PRODUCTOS_TOMADOS_TABLET_SIN_CODIFICAR = 'Encuesta contiene productos tomados por TABLET sin codificar.',
        _f.VALIDAR_RANGO_PAGINAS = 'Página HASTA debe ser mayor que página DESDE',
        _f.IGUALDAD_RANGO_PAGINAS = 'Rangos de Página deben ser diferentes',
        _f.CAMPOSNEGATIVOS_O_INCOMPLETOS = 'No se permiten valores negativos o campos requeridos incompletos',
        _f.VALIDAR_DIGITACION_VENTA_DIRECTA_TRADICIONAL = 'El producto ya esta asignado a esta fuente de datos.¿Desea de todas formas asignar?',
        _f.REEMPLAZAR_PRODUCTO_SURVEY_CONSISTENCY = '¿Está seguro de reemplazar el registro seleccionado?',
        _f);
    Constants.MessageDependiente = (_g = /** @class */ (function () {
            function class_7() {
            }
            return class_7;
        }()),
        _g.ERROR_PERSONAL_VINCULO = 'Se debe seleccionar el vinculo con el dependiente.',
        _g.ERROR_NOMBRES = 'Debe ingresar el nombre.',
        _g.ERROR_APELLIDO_PATERNO = 'Debe ingresar el apellido paterno .',
        _g.ERROR_APELLIDO_MATERNO = 'Debe ingresar el apellido materno.',
        _g.ERROR_FECHA_NACIMIENTO = 'Debe ingresar la fecha de nacimiento.',
        _g.ERROR_GENERO = 'Debe seleccionar el genero.',
        _g.ERROR_TIPO_DOCUMENTO = 'Debe seleccionar el tipo de documento.',
        _g.ERROR_NRO_DOCUMENTO = 'Debe ingresar el numero de documento.',
        _g.ERROR_TIPO_DEPENDIENTE = 'Debe seleccionar el tipo de dependiente.',
        _g.ERROR_NRO_CONTACTO = 'Debe ingresar el numero de contacto.',
        _g);
    Constants.MessageLaboral = (_h = /** @class */ (function () {
            function class_8() {
            }
            return class_8;
        }()),
        _h.ERROR_EMPRESA = 'Debe ingresa la empresa.',
        _h.ERROR_CARGO = 'Debe ingresar el cargo.',
        _h.ERROR_FECHA = 'La Fecha de Inicio debe ser menor a la Fecha Fin.',
        _h);
    Constants.MessageEducacion = (_j = /** @class */ (function () {
            function class_9() {
            }
            return class_9;
        }()),
        _j.ERROR_TIPO_INSTRUCCION = 'Debe seleccionar el tipo de instruccion.',
        _j.ERROR_PROFESION = 'Debe seleccionar la profesion.',
        _j.ERROR_PAIS = 'Debe seleccionar el pais.',
        _j.ERROR_ESTADO = 'Debe seleccionar el estado.',
        _j.ERROR_FECHA = 'La Fecha de Inicio debe ser menor a la Fecha Fin.',
        _j);
    Constants.MessageService = (_k = /** @class */ (function () {
            function class_10() {
            }
            return class_10;
        }()),
        _k.SUCCESS = 'success' // Verde
    ,
        _k.INFORMATION = 'info' // Celeste
    ,
        _k.WARNING = 'warn' // Naranja
    ,
        _k.ERROR = 'error' // Rojo
    ,
        _k);
    Constants.FileExtension = (_l = /** @class */ (function () {
            function class_11() {
            }
            return class_11;
        }()),
        _l.XLS = 'xls',
        _l.XLSX = 'xlsx',
        _l);
    Constants.ExportFormat = (_m = /** @class */ (function () {
            function class_12() {
            }
            return class_12;
        }()),
        _m.PDF = { id: 'PDF', desc: 'PDF', ext: "pdf" },
        _m.EXCEL2007 = { id: 'EXCELOPENXML', desc: 'EXCEL', ext: "xlsx" },
        _m);
    Constants.MasterCodes = (_o = /** @class */ (function () {
            function class_13() {
            }
            return class_13;
        }()),
        _o.MENSAJES = 10,
        _o.ICONOS = 30,
        _o);
    Constants.Maestra = (_p = /** @class */ (function () {
            function class_14() {
            }
            return class_14;
        }()),
        _p.ESTADO_CIVIL = 10,
        _p.GENERO = 11,
        _p.GRADO_ACADEMICO = 12,
        _p.PERSONAL_RELACION_LABORAL = 13,
        _p.TIPO_VIA = 14,
        _p.PERSONAL_VINCULO = 15,
        _p.TIPO_DOCUMENTO = 16,
        _p.TIPO_KIT_INGRESO = 17,
        _p.TIPO_SECCION = 18,
        _p.ESTADO_KIT = 19,
        _p.ESTADO_INFORMACION = 20,
        _p.TIPO_DATO_KIT = 21,
        _p.TIPO_DEPENDIENTE = 22,
        _p.BANCOS = 24,
        _p.TIPO_MONEDA = 25,
        _p.TIPO_CUENTA = 26,
        _p.TIPO_ZONA = 27,
        _p.CARRERA_PROFESIONAL = 28,
        _p.ESTADO_ACADEMICO = 29,
        _p.ESTADO_SEMAFORO = 30,
        _p.LISTA_PAISES = 31,
        _p.LISTA_AFP = 32,
        _p.LISTA_COMISIONES = 33,
        _p);
    Constants.Secciones = (_q = /** @class */ (function () {
            function class_15() {
            }
            return class_15;
        }()),
        _q.PRINCIPAL = 2,
        _q.FAMILIAR = 3,
        _q.EDUCACION = 4,
        _q.LABORAL = 5,
        _q.CTS = 6,
        _q.RENTA_5TA_CATEGORIA = 7,
        _q.AFP = 8,
        _q.SISTEMA_PENSIONES = 9,
        _q.CUENTA_HABERES = 10,
        _q.EPS = 11,
        _q.FORMATOS_AUTORIZACION = 12,
        _q.DECLARACIONES_JURADAS = 13,
        _q.DOCUMENTOS = 14,
        _q);
    Constants.TipoDependiente = (_r = /** @class */ (function () {
            function class_16() {
            }
            return class_16;
        }()),
        _r.FAMILIAR = 2201,
        _r.EMERGENCIA = 2202,
        _r);
    Constants.Keys = (_s = /** @class */ (function () {
            function class_17() {
            }
            return class_17;
        }()),
        _s.KIT_INGRESO = 'kitIngreso',
        _s);
    Constants.CamposPrincipal = (_t = /** @class */ (function () {
            function class_18() {
            }
            return class_18;
        }()),
        _t.TIPO_DOCUMENTO = 'TIPO_DOCUMENTO',
        _t.NRO_DOCUMENTO = 'NRO_DOCUMENTO',
        _t.ESTADO_CIVIL = 'ESTADO_CIVIL',
        _t.GENERO = 'GENERO',
        _t.FECHA_NACIMIENTO = 'FECHA_NACIMIENTO',
        _t.LUGAR_NACIMIENTO = 'LUGAR_NACIMIENTO',
        _t.DEPARTAMENTO = 'DEPARTAMENTO',
        _t.PROVINCIA = 'PROVINCIA',
        _t.DISTRITO = 'DISTRITO',
        _t.CORREO = 'CORREO',
        _t.TIPO_ZONA = 'TIPO_ZONA',
        _t.NOMBRE_ZONA = 'NOMBRE_ZONA',
        _t.TIPO_VIA = 'TIPO_VIA',
        _t.NOMBRE_VIA = 'NOMBRE_VIA',
        _t.NUMERO_VIA = 'NUMERO_VIA',
        _t.INTERIOR = 'INTERIOR',
        _t.CODIGO_POSTAL = 'CODIGO_POSTAL',
        _t.REFERENCIA = 'REFERENCIA',
        _t.FIRMA = 'FIRMA',
        _t.PAIS_DOCUMENTO = 'PAIS_DOCUMENTO',
        _t.FOTO = 'ARCHIVO_FOTO',
        _t);
    Constants.CamposCTS = (_u = /** @class */ (function () {
            function class_19() {
            }
            return class_19;
        }()),
        _u.BANCO = 'BANCO_CTS',
        _u.TIPO_MONEDA = 'TIPO_MONEDA_CTS',
        _u.ACEPTACION = 'CHECK_CTS',
        _u);
    Constants.CamposAFP = (_v = /** @class */ (function () {
            function class_20() {
            }
            return class_20;
        }()),
        _v.TIPO_COMISION_AFP = 'TIPO_COMISION_AFP',
        _v.CODIGO_CUPPS_AFP = 'CODIGO_CUPPS_AFP',
        _v.AFP_AFP = 'AFP_AFP',
        // static readonly LABORO_ULTIMO_ANIO =  'LABORO_ULTIMO_ANIO';
        _v.ACEPTACION_ANTECEDENTES = 'CHECK_ACEPTACION_AFP',
        _v.ACEPTACION_BOLETIN = 'CHECK_BOLETIN_APF',
        _v.ACEPTACION_CONSTANCIA = 'CHECK_CONSTANCIA_AFP',
        _v.ARCHIVO_CONTRATO = 'CHECK_FOTOCOPIA_AFP',
        _v);
    Constants.Campos5taCategoria = (_w = /** @class */ (function () {
            function class_21() {
            }
            return class_21;
        }()),
        _w.ARCHIVO_RETECIONES = 'ARCHIVO_RETECIONES',
        _w.LABORO_ULTIMO_ANIO = 'LABORO_5TA',
        _w.ACEPTACION = 'CHECK_5TA',
        _w);
    Constants.CamposDocumentos = (_x = /** @class */ (function () {
            function class_22() {
            }
            return class_22;
        }()),
        _x.ARCHIVO_EVALUACION_SEGURIDAD = 'ARCHIVO_EVALUACION_SEGURIDAD',
        _x.ACEPTACION_CODIGO_ETICA = 'CHECK_CODIGO_DO',
        _x.ACEPTACION_RECOMENDACIONES = 'CHECK_RECOMENDACIONES_DO',
        _x.ARCHIVO_ANTECEDENTES_PENALES = 'ARCHIVO_ANT_PENALES',
        _x.ARCHIVO_ANTECEDENTES_POLICIALES = 'ARCHIVO_ANT_POLICIALES',
        _x.ARCHIVO_CURRICULUM_VITAE = 'ARCHIVO_CURRICULUM',
        _x.ARCHIVO_GRADO_BACHILLER = 'ARCHIVO_BACHILLER',
        _x.ARCHIVO_CERTIFICADOS_LABORALES = 'ARCHIVO_CERTI_LABORAL',
        _x);
    Constants.CamposEPS = (_y = /** @class */ (function () {
            function class_23() {
            }
            return class_23;
        }()),
        _y.ACEPTA_EPS = 'CHECK_EPS',
        _y.ANEXO_EPS = 'ANEXO_EPS',
        _y.SOLICITUD_AFILIACION = 'SOLICITUD_AFILIACION',
        _y.CONSTANCIA_EPS = 'CONSTANCIA_EPS',
        _y.DECLARACION_JURADA = 'CHECK_NO_AFI_EPS',
        _y);
    Constants.CamposFormatosAutorizacion = (_z = /** @class */ (function () {
            function class_24() {
            }
            return class_24;
        }()),
        _z.ACEPTA_DESCUENTO_REMUNERACION = 'CHECK_ACEPTAR_FA',
        _z.ACEPTA_REMISION_BOLETA = 'CHECK_BOLETA_FA',
        _z.ACEPTA_USO_IMAGEN = 'CHECK_AUTORIZACION_FA',
        _z);
    Constants.CamposDeclaracionJurada = (_0 = /** @class */ (function () {
            function class_25() {
            }
            return class_25;
        }()),
        _0.ACEPTA_REGLAMENTO_COMPANIA = 'CHECK_REGLA_DJ',
        _0.ACEPTA_PREVENCION_SANCION = 'CHECK_POLITICA_DJ',
        _0.ACEPTA_REGLAMENTO_SEGURIDAD = 'CHECK_SEGURIDAD_DJ',
        _0.ACEPTA_ESTADO_SALUD = 'CHECK_ESTADO_SALUD_DJ',
        _0.ARCHIVO_ESTADO_SALUD = 'ARCHIVO_ESTADO_SALUD',
        _0);
    Constants.CamposCuentaHaberes = (_1 = /** @class */ (function () {
            function class_26() {
            }
            return class_26;
        }()),
        _1.BANCO = 'BANCO_CH',
        _1.CUENTA = 'CUENTA_CH',
        _1.TIPO_CUENTA = 'TIPO_CUENTA_CH',
        _1.ACEPTACION_FORMATO = 'CHECK_ACEPTACION_CH',
        _1.VOUCHER_ORIGINAL = 'VOUCHER_ORIGINAL',
        _1.ACEPTACION_SOLICITUD = 'CHECK_ACEP_SOLI_CH',
        _1);
    Constants.CamposPensiones = (_2 = /** @class */ (function () {
            function class_27() {
            }
            return class_27;
        }()),
        _2.ACEPTACION_CONSTANCIA = 'CHECK_ACEPTACION_SP',
        _2.ACEPTACION_FORMATO = 'ACEPTACION_FORMATO',
        _2.ARCHIVO_ANEXO = 'ARCHIVO_ANEXO',
        _2);
    Constants.ArchivosAFP = (_3 = /** @class */ (function () {
            function class_28() {
            }
            return class_28;
        }()),
        _3.CONTRATO = 1,
        _3);
    Constants.ArchivosRenta5ta = (_4 = /** @class */ (function () {
            function class_29() {
            }
            return class_29;
        }()),
        _4.CERTIFICADO_RENTA_QUINTA = 1,
        _4);
    Constants.ArchivosDocumentos = (_5 = /** @class */ (function () {
            function class_30() {
            }
            return class_30;
        }()),
        _5.EVALUACION_INDUCCION_SEGURIDAD = 1,
        _5.CERTIFICADO_ANTECEDENTES_PENALES = 2,
        _5.CERTIFICADO_ANTECEDENTES_POLICIALES = 3,
        _5.CURRICULUM_VITAE = 4,
        _5.GRADO_BACHILLER = 5,
        _5.CERTIFICADOS_LABORALES = 6,
        _5);
    Constants.ArchivosEPS = (_6 = /** @class */ (function () {
            function class_31() {
            }
            return class_31;
        }()),
        _6.ANEXO_DOCUMENTO_EPS = 1,
        _6.SOLICITUD_AFILIACION = 2,
        _6.CONSTANCIA_EPS = 3,
        _6);
    Constants.ArchivosCuentaHaberes = (_7 = /** @class */ (function () {
            function class_32() {
            }
            return class_32;
        }()),
        _7.VOUCHER_ORIGINAL = 1,
        _7);
    Constants.ArchivosPensiones = (_8 = /** @class */ (function () {
            function class_33() {
            }
            return class_33;
        }()),
        _8.ANEXO = 1,
        _8);
    Constants.ArchivosDeclaraciones = (_9 = /** @class */ (function () {
            function class_34() {
            }
            return class_34;
        }()),
        _9.DECLARACION_JURADA_SALUD = 1,
        _9);
    Constants.SemaforoMenu = (_10 = /** @class */ (function () {
            function class_35() {
            }
            return class_35;
        }()),
        _10.TERMINADO = 3001,
        _10.EN_PROCESO = 3002,
        _10.PENDIENTE = 3003,
        _10);
    Constants.EstadoInfoMa = (_11 = /** @class */ (function () {
            function class_36() {
            }
            return class_36;
        }()),
        _11.INGRESADO = 2001,
        _11.ACTUALIZADO = 2002,
        _11.ELIMINADO = 2003,
        _11.INGRESADO_A_API = 2004,
        _11);
    Constants.EstadoKitIngreso = (_12 = /** @class */ (function () {
            function class_37() {
            }
            return class_37;
        }()),
        _12.CERRADO = 1902,
        _12);
    Constants.CodigoDocumento = (_13 = /** @class */ (function () {
            function class_38() {
            }
            return class_38;
        }()),
        _13.SOLICITUD_CTS = "01",
        _13.RENTA_5TA = "01",
        _13.DECLARACION_AFP = "01",
        _13.BOLETIN_SPP_SNP = "01",
        _13.COMUNICACION_PAGO_HABERES = "01",
        _13.APERTURA_CUENTA_HABERES = "02",
        _13.DOCUMENTO_EPS = "01",
        _13.DELCARACION_EPS = "04",
        _13.AUTORIZACION_DESCUENTO = "01",
        _13.AUTORIZACION_BOLETA = "02",
        _13.AUTORIZACION_IMAGEN = "03",
        _13.DECLARACION_REGLAMENTO_INTERNO = "01",
        _13.DECLARACION_PREVENCION_HS = "02",
        _13.DECLARACION_SALUD_TRABAJO = "03",
        _13.CODIGO_ETICA = "02",
        _13.RECOMENDACIONES_MATERIA = "03",
        _13);
    return Constants;
}());
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map