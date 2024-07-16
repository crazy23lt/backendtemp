import { Controller, Delete, Get, Patch, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Put()
  change(): string {
    return 'This action adds a new cat';
  }
  @Delete()
  delete(): string {
    return 'This action adds a new cat';
  }
  @Patch()
  patch(): string {
    return 'This action adds a new cat';
  }
}
export { CatsController };
