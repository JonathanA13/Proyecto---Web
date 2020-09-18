import {Module} from "@nestjs/common";
import {CabeceraReservaService} from "./cabeceraReserva.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CabeceraReservaEntity} from "./cabeceraReserva.entity";
import {CabeceraReservaController} from "./cabeceraReserva.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([CabeceraReservaEntity], 'default')
    ],
    controllers: [
        CabeceraReservaController
    ],
    providers: [
        CabeceraReservaService
    ]
})

export class CabeceraReservaModule {

}