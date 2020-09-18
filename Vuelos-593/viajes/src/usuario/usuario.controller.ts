import {
    BadRequestException,
    Body,
    Controller, Delete,
    Get,
    InternalServerErrorException,
    Param,
    Post,
    Put, Res
} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dtoUsuario/usuario.create-dto";
import {validate, ValidationError} from "class-validator";
import {UsuarioEntity} from "./usuario.entity";

@Controller('usuario')

export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService
    ) {
    }

    @Get()
    async mostrarTodo(){
        try {
            const respuesta = await this._usuarioService.buscarTodos();
            return respuesta;
        } catch (e) {
            console.error(e);
            throw new InternalServerErrorException({
                    mensaje: 'Error del servidor en buscar'
            }
            )
        }
    }

    //Estoy copiando de los archivos del Inge

    @Post()
    async crearUno(
        @Body() parametrosCuerpo
    ){
        try{
            const respuesta = await this._usuarioService.crearUno(parametrosCuerpo);
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
        @Param() parametrosRuta
    ){
        try {
            const respuesta = await this._usuarioService.buscarUno(Number(parametrosRuta.id));
            return respuesta;
        } catch (e) {
            console.error(e);
            throw new InternalServerErrorException({
                mensaje: 'Error del servidor'
            })
        }
    }

    @Put (':id')
    async editarUno(
        @Param() parametrosRuta,
        @Body() parametrosCuerpo
    ){
        const id = Number(parametrosRuta.id);
        const usuarioEditado = parametrosCuerpo;

        usuarioEditado.id = id;
        try{
            const respuesta = await this._usuarioService.editarUno(usuarioEditado);
            return respuesta
        } catch (e) {
            console.error(e)
            throw new InternalServerErrorException({
                mensaje: 'Error del servidor'
            })
        }
    }

    @Delete (':id')
    async eliminarUno(
        @Param() parametrosRuta
    ){
        const id = Number(parametrosRuta.id);
        try{
            const respuesta = await this._usuarioService.eliminarUno(id);
            return {
                mensaje: 'Registro con id ' + id + 'eliminado'
            }
        } catch (e) {
            console.error(e)
            throw new InternalServerErrorException({
                mensaje: 'Error del servidor'
            })
        }
    }
    @Get('vista/inicio')
    inicio(
        @Res() res
    ) {
       res.render('usuario/inicio')
    }

    @Get('vista/iniciar')
    iniciar(
        @Res() res
    ){
        res.render('usuario/login')
    }

    @Get('vista/registrar')
    registrar(
        @Res() res
    ){
        res.render('usuario/registro')
    }

    @Post('registrarVista')
    async registrarVista(
        @Body() paramentroscuerpo,
        @Res() res
    ) {
        const nombre = paramentroscuerpo.nombre_usuario
        const apellido = paramentroscuerpo.apellido_usuario
        const correo = paramentroscuerpo.correo_usuario
        const edad = paramentroscuerpo.edad_usuario
        const contrasenia = paramentroscuerpo.contrasenia
        const usuario = new UsuarioCreateDto()
        usuario.nombreUsuario = nombre
        usuario.apellidoUsuario = apellido
        usuario.correoUsuario = correo
        usuario.edad = Number(edad)
        usuario.contrasenia = contrasenia
        console.log("impimeidno datos", nombre)
        console.log("impimeidno datos", apellido)
        console.log("impimeidno datos", correo)

        try {
            const errores: ValidationError[] = await validate(usuario)
            if (errores.length > 0) {

                console.error("error de try ",errores)
                const mensajeError = 'ERROR EN VALIDACIÓN despues de try'
                return res.redirect('/usuario/vista/registrar?error=' + mensajeError)

            } else {
                let respuestaRegistro
                    try{
                    respuestaRegistro=await this._usuarioService.crearUno(paramentroscuerpo)
                    }catch (error) {
                        console.error(error);
                        const mensajeError = 'Error al registrar el usuario'
                        return res.redirect('/usuario/vista/registrar?error=' + mensajeError)
                    }
                    if(respuestaRegistro){
                        return res.redirect('/vuelo/vista/viajes');
                    }else{
                        const mensajeError = 'Error al registrar el usuario'
                        return res.redirect('/usuario/vista/registrar?error=' + mensajeError)
                    }

            }

        } catch (e) {
            console.error('Error', e)
            const mensajeError = 'ERROR EN VALIDACIÓN en catch'
            return res.redirect('/usuario/vista/registrar?error=' + mensajeError)
        }
    }

    @Post('loginVista')
    async loginVista(
        @Body() paramentroscuerpo,
        @Res() res
    ) {
        const correo = paramentroscuerpo.correo_usuario
        const contrasenia = paramentroscuerpo.contrasenia
        //const usuario = new UsuarioCreateDto()
        //usuario.correoUsuario = correo
        console.log("datos busqueda", correo,contrasenia)

                let respuetabusqueda
                let compararrespuesta
                try {



                    compararrespuesta=await this._usuarioService.buscarLogincontrasenia(contrasenia,correo)

                    console.log("respuesta busqueda",compararrespuesta.toString())


                } catch (error) {
                    console.error(error);
                    const mensajeError = 'Error al iniciar sesion el usuario'
                    return res.redirect('/usuario/vista/iniciar?error=' + mensajeError)
                }
                if(compararrespuesta.toString()){
                    return res.redirect('/vuelo/vista/viajes');
                }else {
                    const mensajeError = 'Error al iniciar sesion'
                    return res.redirect('/usuario/vista/iniciar?error=' + mensajeError)
                }




    }
    }