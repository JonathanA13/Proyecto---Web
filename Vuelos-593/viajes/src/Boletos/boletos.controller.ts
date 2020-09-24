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

import {BoletosService} from "./boletos.service";
import {EscalasCreateDto} from "../Escalas/dtoEscalas/escalas.create-dto";
import {validate, ValidationError} from "class-validator";
import {BoletosCreateDto} from "./dtoBoletos/boletos.create-dto";


@Controller('boleto')
export class BoletosController {
    constructor(
        //inyeccion de dependencias
        private readonly  _boletoService: BoletosService,
    ) {

    }
    @Get()
    async mostrarTodos() {
        try {
            const respuesta = await this._boletoService.buscarTodos()
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
            const respuesta = await this._boletoService.crearUno(parametroscuerpo)
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
            const respuesta = await this._boletoService.buscarUno(paramentrosRuta.id)


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
        const boletoEditado = paramentroCuerpo
        boletoEditado.id = id;
        try {
            console.log('boleto editado', boletoEditado)
            const respuesta = await this._boletoService.editarUno(boletoEditado)
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

            const respuesta = await this._boletoService.eliminarUno(id)
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
    @Post('vista/aniadir_boleto')
    async añadirBoletos(
        @Param() parametrosRuta,
        @Res() res,
        @Body() paramentroscuerpo
    ) {
        const fecha_salida = paramentroscuerpo.fecha_salida
        const costo = paramentroscuerpo.costo_boleto
        const puerta=paramentroscuerpo.puerta_abordaje

        const BoletolDto = new BoletosCreateDto()
        BoletolDto.costo_boleto = costo
        BoletolDto.fecha_salida = fecha_salida
        BoletolDto.puerta_abordaje=puerta
        const idVuelo = parametrosRuta.id
        try {
            const errores: ValidationError[] = await validate(BoletolDto)
            if (errores.length > 0) {

                console.error("error de try ", errores)
                const mensajeError = 'ERROR EN VALIDACIÓN despues de try'
                return res.redirect('/vuelo/vista/adminBoleto/?error=' + mensajeError)

            } else {

                let respuestaRegistro
                try {
                    respuestaRegistro = await this._boletoService.crearUno(paramentroscuerpo)
                } catch (error) {
                    console.error(error);
                    const mensajeError = 'Error al registrar el vuelo'
                    return res.redirect('/vuelo/vista/adminBoleto/?error=' + mensajeError)
                }
                if (respuestaRegistro) {
                    return res.redirect('/vuelo/vista/admin');
                } else {
                    const mensajeError = 'Error al registrar el viaje'
                    return res.redirect('/vuelo/vista/adminBoleto/?error=' + mensajeError)
                }


            }

        } catch (e) {
            console.error('Error', e)
            const mensajeError = 'ERROR EN VALIDACIÓN en catch'
            return res.redirect('/vuelo/vista/adminBoleto/?error=' + mensajeError)


        }
    }
}