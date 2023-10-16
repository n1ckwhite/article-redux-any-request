import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { CountService } from './count.service';

@Controller('count')
export class CountController {
  constructor(private readonly countService: CountService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async getCount() {
    return await this.countService.getCount();
  }
  @Patch('/plus')
  @HttpCode(HttpStatus.OK)
  async plusCount(@Body('id') id: string) {
    return await this.countService.plusCount(id);
  }
  @Patch('/minus')
  @HttpCode(HttpStatus.OK)
  async minusCount(@Body('id') id: string) {
    return await this.countService.minusCount(id);
  }
  @Patch('/clear')
  @HttpCode(HttpStatus.OK)
  async clearCount(@Body('id') id: string) {
    return await this.countService.clearCount(id);
  }
}
