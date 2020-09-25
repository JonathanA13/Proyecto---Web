import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PagosEntity} from "./pagos.entity";
import {PagosService} from "./pagos.service";
import {PagosController} from "./pagos.controller";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([PagosEntity], 'default')
        ],
        controllers: [
            PagosController
        ],
        providers:[
            PagosService
        ]
    }
)

export class PagosModule {

}