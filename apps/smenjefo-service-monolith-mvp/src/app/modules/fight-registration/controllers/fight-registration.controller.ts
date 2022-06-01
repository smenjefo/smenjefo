import { Controller, Get } from '@nestjs/common';

@Controller('fight-registration')
export class FightRegistrationController {
  @Get()
  findAll() {
    return {
      currentVersion: 1,
    };
  }
}
