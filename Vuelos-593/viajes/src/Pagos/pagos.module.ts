import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PagosEntity} from "./pagos.entity";
import {PagosService} from "./pagos.service";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([PagosEntity], 'default')
        ],
        controllers: [

        ],
        providers:[
            PagosService
        ]
    }
)

export class PagosModule {

}