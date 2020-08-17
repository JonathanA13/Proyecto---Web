import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AsientoEntity} from "./Asientos/asiento.entity";
import {BoletosEntity} from "./Boletos/boletos.entity";
import {CabeceraReservaEntity} from "./CabeceraReserva/cabeceraReserva.entity";
import {EscalasEntity} from "./Escalas/escalas.entity";
import {PagosEntity} from "./Pagos/pagos.entity";
import {ReservaEntity} from "./Reserva/reserva.entity";
import {RolEntity} from "./Rol/rol.entity";
import {RolUsuarioEntity} from "./RolUsuario/rolUsuario.entity";
import {UsuarioEntity} from "./Usuario/usuario.entity";
//import {RegistroModule} from "./Registro/registro-module";

@Module({
  imports: [

     TypeOrmModule.forRoot({
    name: 'default',//nombre de conexion
    type: 'mysql', //mysql,postgres
    host: 'localhost',//ip
    port: 3306,//puerto
    username: 'root', //usuario
    password: 'root',//password
    database: 'Vuelos',//base de datos
    entities: [
      AsientoEntity,
      BoletosEntity,
        CabeceraReservaEntity,
        EscalasEntity,
        PagosEntity,
        ReservaEntity,
        RolEntity,
        RolUsuarioEntity,
        UsuarioEntity
    ], //todas las entidades
    synchronize: true, //actualiza el esquema de la BD
    dropSchema: false, //eliminar los datos y el esquema de BD
  }),
  ],
  controllers: [AppController,

  ],
  providers: [AppService],
})
export class AppModule {}
