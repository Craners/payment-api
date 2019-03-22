import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './shared/filters/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const hostDomain = 'http://localhost:3000';

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Bunq REST API')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .setHost(hostDomain.split('//')[1])
    .setSchemes('http')
    .setBasePath('/')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
  // app.useGlobalPipes(new ValidationPipe());

  app.use('/api/docs/swagger.json', (req, res) => {
    res.send(swaggerDoc);
  });

  // app.use(session({ secret: 'nest is awesome' }));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  SwaggerModule.setup('/api/docs', app, null, {
    swaggerUrl: `${hostDomain}/api/docs/swagger.json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });

  app.useGlobalFilters(new HttpExceptionFilter());
  
  await app.listen(3000);
}
bootstrap();
