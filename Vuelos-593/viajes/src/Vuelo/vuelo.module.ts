import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {BoletosEntity} from "../Boletos/boletos.entity";
import {BoletosService} from "../Boletos/boletos.service";
import {VueloService} from "./vuelo.service";
import {VueloEntity} from "./vuelo.entity";
import {VueloController} from "./vuelo.controller";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([VueloEntity], 'default')
        ],
        controllers: [
                VueloController
        ],
        providers:[
            VueloService
        ]
    }
)

export class VueloModule {

}