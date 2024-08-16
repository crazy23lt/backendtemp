import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type MovieDocument = HydratedDocument<Movie>;
@Schema()
export class Movie {
  @Prop()
  title: string;
  @Prop()
  plot: string; // 故事情节
  @Prop()
  genres: string[]; // 类型
  @Prop()
  runtime: number; // 次数
  @Prop()
  cast: string[]; // 演员表
  @Prop()
  poster: string; // 海报
  @Prop()
  fullplot: string; // 完整故事情节
  @Prop()
  languages: string[]; // 语言
  @Prop()
  released: Date; // 上映时间
  @Prop()
  directors: string[]; //导演
  @Prop()
  rated: string; // 评级
  @Prop()
  awards: { wins: number; nominations: number; text: string }[];
  @Prop()
  lastupdated: string;
  @Prop()
  year: number;
  @Prop()
  imdb: { rating: number; votes: number; id: number }[];
  @Prop()
  countries: string[];
  @Prop()
  type: string;
  @Prop()
  tomatoes: {
    lastUpdated?: Date;
    dvd?: Date;
    website?: string;
    production?: string;
  }[];
  @Prop()
  num_mflix_comments: number;
  @Prop()
  writers: string[];
}
export const MovieSchema = SchemaFactory.createForClass(Movie);
