import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/common/swagger.config';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  setupSwagger(app);

  await app.listen(3000);

  console.info('Server is running on port 3000');
}
bootstrap();
