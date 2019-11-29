/*
 * @Date: 2019-09-27 23:40:07
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-28 15:55:22
 * @content: 入口文件
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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

  await app.listen(3008);
  Logger.log(`App run in http://localhost:3008`);
}
bootstrap();
