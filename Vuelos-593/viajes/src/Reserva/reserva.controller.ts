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
import {VueloService} from "../Vuelo/vuelo.service";
import {log} from "util";

@Controller('reserva')

export class ReservaController {

    constructor(
        private readonly _reservaService: ReservaService,
        private readonly _boletoService: BoletosService,
        private readonly _vueloService: VueloService,
        private readonly _asientoService: AsientoService
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
            const id_vuelo = Number(parametrosruta.idVuelo)
            console.log("****************************", id_asiento)
            console.log("****************************", id_vuelo)

            return res.render(
                'viajes/reservar',
                {
                    arregloBoleto: resultadoEncontrado,
                    id: id_asiento,
                    idVuelo: id_vuelo,
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

    @Get('vista/datos/:id_Boleto/:id_Vuelo/:id_Asiento')
    async datos(
        @Res() res,
        @Param() parametrosruta
    ){
        //const fechaActual = Date.now()
        //console.log("Esta es la fecha******************", fechaActual)
        const id_boleto = Number(parametrosruta.id_Boleto)
        console.log("************************************", id_boleto)
        const id_vuelo = Number(parametrosruta.id_Vuelo)
        console.log("************************************", id_vuelo)
        const id_asiento = Number(parametrosruta.id_Asiento)
        console.log("************************************", id_asiento)
        let respuesta1
        let respuesta2
        let respuesta3
        try {
            respuesta1 = await this._boletoService.buscarUno(id_boleto)
            respuesta2 = await this._vueloService.buscarUno(id_vuelo)
            respuesta3 = await this._asientoService.buscarUno(id_asiento)

            console.log("LLega hasta aquí el arreglo *************", respuesta1)
            console.log("LLega hasta aquí el arreglo *************", respuesta2)
            console.log("LLega hasta aquí el arreglo *************", respuesta3)

        } catch (error) {
            throw new InternalServerErrorException('Error encontrando destino')
        }
        if (respuesta1 && respuesta2 && respuesta3) {
            console.log("AQUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUIIIIIII")
            res.render(
                'pagos/datosPago',
                {
                    arregloVuelo: respuesta2,
                    arregloBoleto: respuesta1,
                    arregloAsiento: respuesta3,


                });
        } else {
            throw new NotFoundException('No se encontraron viajes')
        }
        //const

    }


}