import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { resolve } from 'path';
import { writeFileSync, createWriteStream } from 'fs';
import { get } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards();
  app.useGlobalPipes(new ValidationPipe());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  const config = new DocumentBuilder()
    .setTitle('API crud basic')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT, '0.0.0.0');
  const serverUrl = process.env.serverUrl || 'http://localhost:3000';
  // write swagger ui files
  get(
    `${serverUrl}/swagger/swagger-ui-bundle.js`, function 
    (response) {
      response.pipe(createWriteStream('swagger-static/swagger-ui-bundle.js'));
      console.log(
  `Swagger UI bundle file written to: '/swagger-static/swagger-ui-bundle.js'`,
);
  });

  get(`${serverUrl}/swagger/swagger-ui-init.js`, function (response) {
    response.pipe(createWriteStream('swagger-static/swagger-ui-init.js'));
    console.log(
  `Swagger UI init file written to: '/swagger-static/swagger-ui-init.js'`,
);
  });

  get(
`${serverUrl}/swagger/swagger-ui-standalone-preset.js`,
function (response) {
    response.pipe(
    createWriteStream('swagger-static/swagger-ui-standalone-preset.js'),
  );
    console.log(
    `Swagger UI standalone preset file written to: '/swagger-static/swagger-ui-standalone-preset.js'`,
  );
  });

  get(`${serverUrl}/swagger/swagger-ui.css`, function (response) {
    response.pipe(createWriteStream('swagger-static/swagger-ui.css'));
    console.log(
  `Swagger UI css file written to: '/swagger-static/swagger-ui.css'`,
);
  });
}
bootstrap();

