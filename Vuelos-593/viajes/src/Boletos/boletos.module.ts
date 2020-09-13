import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {BoletosEntity} from "./boletos.entity";
import {BoletosService} from "./boletos.service";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([BoletosEntity], 'default')
        ],
        controllers: [

        ],
        providers:[
            BoletosService
        ]
    }
)


export class BoletosModule {

}