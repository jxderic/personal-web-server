/*
 * @Date: 2019-09-27 23:40:07
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-10-04 15:14:59
 * @content: 入口文件
 */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as mongoose from 'mongoose'
import { ValidationPipe, Logger } from '@nestjs/common'

async function bootstrap() {
  mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('博客接口')
    .setDescription('我的博客接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  Logger.log(`App run in http://localhost:3000`)
}
bootstrap();
