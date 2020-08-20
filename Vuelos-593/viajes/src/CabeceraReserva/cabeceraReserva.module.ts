import {Module} from "@nestjs/common";
import {CabeceraReservaService} from "./cabeceraReserva.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CabeceraReservaEntity} from "./cabeceraReserva.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([CabeceraReservaEntity], 'default')
    ],
    controllers: [],
    providers: [
        CabeceraReservaService
    ]
})

export class CabeceraReservaModule {

}