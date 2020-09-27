import {Module} from "@nestjs/common";
import {ReservaService} from "./reserva.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReservaEntity} from "./reserva.entity";
import {ReservaController} from "./reserva.controller";
import {BoletosModule} from "../Boletos/boletos.module";
import {AsientoService} from "../Asientos/asiento.service";
import {BoletosService} from "../Boletos/boletos.service";
import {VueloModule} from "../Vuelo/vuelo.module";
import {AsientoModule} from "../Asientos/asiento.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([ReservaEntity], 'default'),
        BoletosModule,
        VueloModule,
        AsientoModule
    ],
    controllers: [
        ReservaController
    ],
    providers: [
        ReservaService
    ]
})

export class ReservaModule {

}