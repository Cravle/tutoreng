import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Tutoreng')
    .setDescription('The tutoreng')
    .setVersion('0.1')
    .build()

  app.enableCors()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  await app.listen(8080)
}
bootstrap()
