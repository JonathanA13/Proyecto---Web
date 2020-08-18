import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CabeceraReservaEntity} from "./cabeceraReserva.entity";
import {Repository} from "typeorm";

@Injectable()

export class CabeceraReservaService {
    constructor(
        @InjectRepository(CabeceraReservaEntity)
        private repositorio: Repository<CabeceraReservaEntity>
    ) {
    }
}