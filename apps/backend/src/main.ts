import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const port = process.env.PORT || 4003;
  await app.listen(port);
  console.log(`🚀 Omyxia CRM Microservice (Backend) running on port ${port}`);
}

bootstrap();
