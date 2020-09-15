import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)as any;

  const express=require('express');

  app.set('view engine','ejs');
  app.use(express.static('publico'))

  await app.listen(3003);
}
bootstrap();
