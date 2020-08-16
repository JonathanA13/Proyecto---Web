import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import {RegistroModule} from "./Registro/registro-module";

@Module({
  imports: [],
  controllers: [AppController,
  //RegistroModule
  ],
  providers: [AppService],
})
export class AppModule {}
