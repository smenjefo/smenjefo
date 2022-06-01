import { Controller, Get } from '@nestjs/common';

@Controller('fight')
export class FightController {
  @Get()
  findAll() {
    return {
      currentVersion: 1,
    };
  }
}
