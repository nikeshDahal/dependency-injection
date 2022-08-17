import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module'; // as a main module

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(3000);
}
bootstrap();
