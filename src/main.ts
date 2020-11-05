/*
 * @Date: 2019-09-27 23:40:07
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-11-02 10:15:07
 * @content: 入口文件
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { winstonLogger } from './util/winston-logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });
  app.useGlobalPipes(new ValidationPipe()); // 全局管道验证

  app.enableCors(); // 启用CORS

  const options = new DocumentBuilder()
    .setTitle('博客接口')
    .setDescription('我的博客接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3009);
  winstonLogger.log(`App run in http://localhost:3009`);
}
bootstrap();
