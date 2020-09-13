import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {EscalasService} from "./escalas.service";


@Module(
    {
        imports:[
            TypeOrmModule.forFeature([EscalasModule], 'default')
        ],
        controllers: [

        ],
        providers:[
            EscalasService
        ]
    }
)
export class EscalasModule {

}