import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {BoletosEntity} from "./boletos.entity";
import {BoletosService} from "./boletos.service";
import {BoletosController} from "./boletos.controller";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([BoletosEntity], 'default')
        ],
        controllers: [
            BoletosController
        ],
        providers:[
            BoletosService
        ]
    }
)


export class BoletosModule {

}