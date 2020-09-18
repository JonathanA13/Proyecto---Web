import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {VueloService} from "./vuelo.service";
import {VueloEntity} from "./vuelo.entity";
import {VueloController} from "./vuelo.controller";
import {AsientoModule} from "../Asientos/asiento.module";
import {EscalasModule} from "../Escalas/escalas.module";

@Module(
    {
        imports:[

            EscalasModule,
            AsientoModule,
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