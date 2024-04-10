import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api/v1'); // Adds prefix
  const options = {
    origin: 'http://localhost:4200',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
    methods: 'GET,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
    header: 'Access-Control-Allow-Origin: *',
  };

  app.enableCors(options);
  await app.listen(3000);
}
bootstrap();
