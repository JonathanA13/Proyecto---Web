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
}