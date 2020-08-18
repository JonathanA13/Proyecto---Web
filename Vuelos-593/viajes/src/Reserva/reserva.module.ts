import {Module} from "@nestjs/common";
import {ReservaService} from "./reserva.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ReservaEntity} from "./reserva.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ReservaEntity], 'default')
    ],
    controllers: [],
    providers: [
        ReservaService
    ]
})

export class ReservaModule {

}