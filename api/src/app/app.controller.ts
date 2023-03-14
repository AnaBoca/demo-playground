import { Controller, Get, Delete, Param, Body, Put } from '@nestjs/common';
import { UpdateChoreDto } from '../dto/chore.model';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getChores() {
    return this.appService.getChores();
  }

  @Delete(':id')
  deleteChore(@Param('id') choreId: string) {
    this.appService.deleteChore(Number(choreId));
  }

  @Put(':id')
  updateChore(@Param('id') choreId: string, @Body() post: UpdateChoreDto) {
    this.appService.updateChore(Number(choreId), post);
  }
}
