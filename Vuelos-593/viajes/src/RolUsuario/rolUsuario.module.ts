import {Module} from "@nestjs/common";
import {RolUsuarioService} from "./rolUsuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolUsuarioEntity} from "./rolUsuario.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([RolUsuarioEntity], 'default')
    ],

    controllers: [],

    providers: [
        RolUsuarioService
    ]
})

export class RolUsuarioModule {

}