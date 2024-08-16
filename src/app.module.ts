import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
/**
 * 根模块 ：是nest用来构建应用程序图的起点
 * @Module 装饰器
 */
@Module({
  /** 导入模块列表 */
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@liutdb.eyaju.mongodb.net/${process.env.DATABASE_DOCUMENT}`,
    ),
    MoviesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
