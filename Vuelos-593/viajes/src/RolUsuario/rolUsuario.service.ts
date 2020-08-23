import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {RolUsuarioEntity} from "./rolUsuario.entity";

@Injectable()

export class RolUsuarioService {
    constructor(
        @InjectRepository(RolUsuarioEntity)
        private repositorio: Repository<RolUsuarioEntity>
    ) {
    }

    crearUno(nuevoRolUsuario: RolUsuarioEntity){
        return this.repositorio.save(nuevoRolUsuario)
    }

    buscarTodos(){
        return this.repositorio.find()
    }

    buscarUno(id: number){
        return this.repositorio.findOne(id)
    }

    editarUno(rolUsuarioEditado: RolUsuarioEntity){
        return this.repositorio.save(rolUsuarioEditado)
    }

    eliminarUno(id: number){
        return this.repositorio.delete(id)
    }
}