import {
    BadRequestException,
    Body,
    Controller, Delete,
    Get,
    InternalServerErrorException,
    NotFoundException,
    Param,
    Post, Put, Res
} from "@nestjs/common";

import {VueloService} from "./vuelo.service";
import {VueloCreateDto} from "./dtoVuelo/vuelo.create-dto";
import {AsientoCreateDto} from "../Asientos/dtoAsientos/asiento.create-dto";
import {EscalasCreateDto} from "../Escalas/dtoEscalas/escalas.create-dto";
import {validate, ValidationError} from "class-validator";
import {AsientoService} from "../Asientos/asiento.service";
import {EscalasService} from "../Escalas/escalas.service";
import {UsuarioService} from "../usuario/usuario.service";


@Controller('vuelo')
export class VueloController {
    constructor(
        //inyeccion de dependencias
        private readonly  _vueloService:VueloService,
        private readonly  _asientoService: AsientoService,
        private readonly  _escalaService: EscalasService,
        private readonly _usuarioService: UsuarioService,

    ) {

    }

    @Get()
    async mostrarTodos() {
        try {
            const respuesta = await this._vueloService.buscarTodos()
            return respuesta
        } catch (e) {
            console.error(e)
            throw new InternalServerErrorException(
                {
                    mensaje: "Error del servidor"
                }
            )
        }

    }

    @Post()
    async crearUno(
        @Body() parametroscuerpo
    ) {
        try {
            //validacion del CREATE DTO
            const respuesta = await this._vueloService.crearUno(parametroscuerpo)
            return respuesta

        } catch (e) {
            console.error(e);
            throw new BadRequestException({
                mensaje: 'Error validando datos'
            })
        }
    }

    @Get(':id')
    async verUno(
        @Param() paramentrosRuta
    ) {
        let respuesta
        try {
            const respuesta = await this._vueloService.buscarUno(paramentrosRuta.id)


        } catch (e) {
            console.error(e)
            throw new InternalServerErrorException(
                {
                    mensaje: "Error del servidor"
                }
            )
        }
        if (respuesta) {
            return respuesta
        } else {
            throw new NotFoundException(
                {
                    mensaje: 'No existen registros'
                }
            )
        }
    }

    @Put(':id')
    async editarUno(
        @Param() parametroRuta,
        @Body() paramentroCuerpo
    ) {
        const id = Number(parametroRuta.id);
        const vueloEditado = paramentroCuerpo
        vueloEditado.id = id;
        try {
            console.log('pago editado', vueloEditado)
            const respuesta = await this._vueloService.editarUno(vueloEditado)
            return respuesta;

        } catch (e) {
            console.error(e)
            throw new InternalServerErrorException(
                {
                    mensaje: "Error del servidor"
                }
            )
        }
    }

    @Delete(':id')
    async eliminarUno(
        @Param() parametroRuta

    ) {
        const id = Number(parametroRuta.id)
        try {

            const respuesta = await this._vueloService.eliminarUno(id)
            return {
                mensaje: 'Registro con id' + id + 'eliminado'
            }

        } catch (e) {
            console.error(e)
            throw new InternalServerErrorException(
                {
                    mensaje: "Error del servidor"
                }
            )
        }
    }

    @Get('vista/viajes')
    viajes(
        @Res() res
    ){
        res.render('vuelo/viajes')
    }

   @Get('vista/admin')
   async admin(
       @Res() res
   ) {
       let resultadoEncontrado
       try {
           resultadoEncontrado = await this._vueloService.buscarTodos();
       } catch (error) {
           throw new InternalServerErrorException('Error encontrando vuelos')
       }
       if (resultadoEncontrado) {
           res.render('vuelo/crearViajesAdmin',
               {
                   arreglovuelo: resultadoEncontrado
               })
       }
   }



   @Get('vista/adminViajes')
       adminViajes(
           @Res()
       res
   )
       {
           res.render('administrar/adminViajes')
       }
   @Get('vista/adminEscalas/:id')
       adminEscalas(
           @Res()
       res,
       @Param()
       parametrosruta
   )
       {
           const idvuelo = Number(parametrosruta.id)
           return res.render('administrar/adminEscalas', {
               id:idvuelo
           })
       }

   @Get('vista/adminBoleto')
       adminAsientos(
           @Res()
       res
   )
       {
           res.render('administrar/adminBoletos')
       }

   @Post('adminViajesVista')

       async viajesVista(
           @Body()
               parametrosCuerpo,
           @Res()
               res
       ) {
           const asientosDisponibles = parametrosCuerpo.asientos_diponibles;
           const asientosOcupadaos = parametrosCuerpo.asientos_ocupados;
           const origen = parametrosCuerpo.lugar_origen;
           const destino = parametrosCuerpo.lugar_destino;
           const estadoVuelo = parametrosCuerpo.estado_vuelo;
           const tiposVuelo = parametrosCuerpo.tipo_vuelo;
           const vuelo = new VueloCreateDto()

           vuelo.asientos_diponibles = Number(asientosDisponibles)
           vuelo.asientos_ocupados = Number(asientosOcupadaos)
           vuelo.estado_vuelo = estadoVuelo
           vuelo.lugar_destino = destino
           vuelo.lugar_origen = origen
           vuelo.tipo_vuelo = tiposVuelo

           try {
               const errores: ValidationError[] = await validate(vuelo)
               if (errores.length > 0) {

                   console.error("error de try ", errores)
                   const mensajeError = 'ERROR EN VALIDACIÓN despues de try'
                   return res.redirect('/vuelo/vista/adminViajes?error=' + mensajeError)

               } else {
                   let respuestaRegistro
                   try {
                       respuestaRegistro = await this._vueloService.crearUno(parametrosCuerpo)
                   } catch (error) {
                       console.error(error);
                       const mensajeError = 'Error al registrar el vuelo'
                       return res.redirect('/vuelo/vista/adminViajes?error=' + mensajeError)
                   }
                   if (respuestaRegistro) {
                       return res.redirect('/vuelo/vista/admin');
                   } else {
                       const mensajeError = 'Error al registrar el viaje'
                       return res.redirect('vuelo/vista/adminViajes?error=' + mensajeError)
                   }

               }

           } catch (e) {
               console.error('Error', e)
               const mensajeError = 'ERROR EN VALIDACIÓN en catch'
               return res.redirect('vuelo/vista/adminViajes?error=' + mensajeError)
           }
       }

    @Get('vista/adminUsuarios')
    async adminUsuario(
        @Res() res
    ) {
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._usuarioService.buscarTodos();
        } catch (error) {
            throw new InternalServerErrorException('Error encontrando vuelos')
        }
        if (resultadoEncontrado) {

            res.render('administrar/adminUsuario',
                {
                    arreglousuario: resultadoEncontrado,


                })
        }
    }

   }