import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AsientoEntity} from "./asiento.entity";
import {AsientoService} from "./asiento.service";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature([AsientoEntity], 'default')
        ], controllers: [

        ],
        providers:[
            AsientoService
        ]

    })
export class AsientoModule {

}