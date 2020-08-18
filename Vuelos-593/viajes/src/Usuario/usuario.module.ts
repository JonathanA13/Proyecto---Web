import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsuarioEntity], 'default')
    ],
    controllers: [

    ],
    providers: [
        UsuarioService
    ]
})

export class UsuarioModule {
    
}