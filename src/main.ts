import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: true,credentials: true});
  app.use(cookieParser());
  app.use(session({
    secret: 'dar_blog',
    cookie:{maxAge:60*60*1000},
    resave: false,
    saveUninitialized: true,
    rolling: true
  }));
  await app.listen(4000);
}
bootstrap();
