import {
  Controller,
  Get,
  Delete,
  Param,
  Body,
  Put,
  Post,
} from '@nestjs/common';
import { Chore } from '@demo/models';

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
  updateChore(@Param('id') choreId: string, @Body() putChore: Chore) {
    this.appService.updateChore(Number(choreId), putChore);
  }

  @Post()
  addChore(@Body() postChore: Chore) {
    this.appService.addChore(postChore);
    return postChore.id;
  }
}
