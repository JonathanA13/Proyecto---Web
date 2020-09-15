import {Module} from "@nestjs/common";
import {ReservaService} from "./reserva.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReservaEntity} from "./reserva.entity";
import {ReservaController} from "./reserva.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ReservaEntity], 'default')
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