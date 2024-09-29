import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });

  const { version } = await import('../package.json');
  const options = new DocumentBuilder()
    .setTitle(`ChatFlex - ${process.env.NODE_ENV}`)
    .setDescription('Back-end do projeto ChatFlex')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const PORT = Number(process.env.PORT) || 3000;

  await app.listen(PORT, '0.0.0.0');
  console.log(
    `🤖 ChatFlex is in ${process.env.NODE_ENV} mode and is listening on port:`,
    PORT,
  );
}
bootstrap();
