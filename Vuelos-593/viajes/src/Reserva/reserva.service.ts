import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ReservaEntity} from "./reserva.entity";
import {Repository} from "typeorm";

@Injectable()

export class ReservaService {
    constructor(
        @InjectRepository(ReservaEntity)
        private repositorio: Repository<ReservaEntity>
    ) {
    }
}