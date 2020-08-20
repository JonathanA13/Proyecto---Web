import {Module} from "@nestjs/common";
import {RolService} from "./rol.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolEntity} from "./rol.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([RolEntity], 'default')
    ],
    controllers: [],
    providers: [
        RolService
    ]
})

export class RolModule {

}