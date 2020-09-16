import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Equal, FindManyOptions, FindOneOptions, Repository} from "typeorm";

@Injectable()

export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private repositorio:Repository<UsuarioEntity>
    ) {
    }

    crearUno(nuevoUsuario: UsuarioEntity){
        return this.repositorio.save(nuevoUsuario)
    }

    buscarTodos(){
        return this.repositorio.find()
    }

    buscarUno(id: number){
        return this.repositorio.findOne(id)
    }
    buscarLogincontrasenia(login_contrasenia:string,login_correo:string){
       console.log("contrasenia",login_contrasenia)
        let buscarcontraenia:FindManyOptions<UsuarioEntity>
        buscarcontraenia={
           where:{
               contrasenia:Equal(login_contrasenia),
               correo_usuario:Equal(login_correo)

           }
        }
           return this.repositorio.find(buscarcontraenia)



    }



    editarUno(usuarioEditado: UsuarioEntity){
        return this.repositorio.save(usuarioEditado)
    }

    eliminarUno(id:number){
        return this.repositorio.delete(id)
    }
}