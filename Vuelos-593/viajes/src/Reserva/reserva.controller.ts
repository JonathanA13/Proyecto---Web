import {
    BadRequestException,
    Body,
    Controller, Delete,
    Get,
    InternalServerErrorException, NotFoundException,
    Param,
    Post,
    Put, Query, Res
} from "@nestjs/common";
import {ReservaService} from "./reserva.service";
import {BoletosService} from "../Boletos/boletos.service";
import {AsientoService} from "../Asientos/asiento.service";

@Controller('reserva')

export class ReservaController {

    constructor(
        private readonly _reservaService: ReservaService,
        private readonly _boletoService: BoletosService,
    ) {
    }

    @Get()
    async mostrarTodo(){
        try {
            const respuesta = await this._reservaService.buscarTodos();
            return respuesta;
        } catch (e) {
            console.error(e);
            throw new InternalServerErrorException({
                    mensaje: 'Error del servidor en buscar'
                }
            )
        }
    }

    @Post()
    async crearUno(
        @Body() parametrosCuerpo
    ){
        try {
            const respuesta = await  this._reservaService.crearUno(parametrosCuerpo);
            return respuesta;
        } catch (e) {
            console.error(e);
            throw new BadRequestException({
                mensaje: 'Error validando datos'
            })
        }
    }

    @Get(':id')
    async verUno(
        @Param() parametrosRuta
    ){
        try {
            const respuesta = await this._reservaService.buscarUno(Number(parametrosRuta.id));
            return respuesta;
        } catch (e) {
            console.error(e);
            throw new InternalServerErrorException({
                mensaje: 'Error del servidor al ver uno'
            })
        }
    }

    @Put(':id')
    async editarUno(
        @Param() parametrosRuta,
        @Body() parametrosCuerpo
    ){
        const id = Number(parametrosRuta.id);
        const reservaEditado = parametrosCuerpo;

        try {
            const respuesta = await this._reservaService.editarUno(reservaEditado);
            return respuesta;
        }catch (e) {
            console.error(e);
            throw new InternalServerErrorException({
                mensaje: 'Error del servidor al editar uno'
            })
        }
    }

    @Delete(':id')
    async eliminarUno(
        @Param() parametrosRuta
    ){
        const id = Number(parametrosRuta.id);
        try {
            const respuesta = await this._reservaService.eliminarUno(id);
            return respuesta;
        }catch (e) {
            console.error(e);
            throw new InternalServerErrorException({
                mensaje: 'Error del servidor al eliminar uno'
            })
        }
    }

    @Get('vista/reserva/:id/:numeroAsiento/:idVuelo')
    async reserva(
        @Res() res,
        @Body() parametrosCuerpo,
        @Query() parametrosConsulta,
        @Param() parametrosruta
    ){
        let resultadoEncontrado
        try {
            //resultadoEncontrado = await this._vueloService.buscarTodosParametros(parametrosConsulta.destino)
            resultadoEncontrado = await this._boletoService.buscarTodos()
            console.log("LLega hasta aquí el arreglo ", resultadoEncontrado)
        } catch (error) {
            throw new InternalServerErrorException('Error encontrando destino')
        }
        if (resultadoEncontrado) {

            const numAsiento = Number(parametrosruta.numeroAsiento)
            const id_asiento = Number(parametrosruta.id)
            const id_vuelo = Number(parametrosruta.id_Vuelo)
            return res.render(
                'viajes/reservar',
                {
                    arregloBoleto: resultadoEncontrado,
                    id: id_asiento,
                    id_Vuelo: id_vuelo,
                    numero_asiento_reservado: numAsiento
                    //parametrosConsulta: parametrosConsulta
                });
        } else {
            throw new NotFoundException('No se encontraron viajes')
        }

        //res.render('viajes/reservar')
    }

    /*@Get('reserva')
    async ofertasVista(
        @Res() res,
        @Query() parametrosConsulta
    )
    {
        let resultadoEncontrado
        try {
            //resultadoEncontrado = await this._vueloService.buscarTodosParametros(parametrosConsulta.destino)
            resultadoEncontrado = await this._vueloService.buscarTodos()
            console.log("LLega hasta aquí el arreglo ", resultadoEncontrado)
        } catch (error) {
            throw new InternalServerErrorException('Error encontrando destino')
        }
        if (resultadoEncontrado) {
            res.render(
                'vuelo/viajes',
                {
                    arregloViaje: resultadoEncontrado,
                    parametrosConsulta: parametrosConsulta
                });
        } else {
            throw new NotFoundException('No se encontraron viajes')
        }
    }*/

    /*@Get('vista/datos/:id')
    async datos(
        @Res() res,
        @Param() parametrosruta
    ){
        //const fechaActual = Date.now()
        //console.log("Esta es la fecha******************", fechaActual)
        const id_asiento = Number(parametrosruta.id)
        let respuestaBusqueda = await this._asientoService.busqueda(id_asiento)
        try {

        }
        //const

    }*/


}