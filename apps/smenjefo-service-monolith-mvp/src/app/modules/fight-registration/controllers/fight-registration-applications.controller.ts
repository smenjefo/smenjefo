import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, Query } from '@nestjs/common';

import PrimaryKeyMappingInterceptor from '../../../interceptors/PrimaryKeyMappingInterceptor';

import { ApplicationsService } from '../services/applications.service';

import CreateFightApplicationDto from '../dto/create-fight-application.dto';
import FightApplicationDto from '../dto/fight-application.dto';
import { ApplicationUUIDParam } from '../dto/application-uuid.param';
import { TypeParam } from '../dto/type.param';

@Controller('fight-registration/applications')
@UseInterceptors(PrimaryKeyMappingInterceptor)
export class FightRegistrationApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
  ) {}

  @Get()
  findAll(@Query() type: TypeParam) {
    return this.applicationsService.getAllTree(type.type);
  }

  @Get(':applicationUUID')
  findOne(@Param() applicationUUID: ApplicationUUIDParam) {
    return this.applicationsService.getOneByUUID(applicationUUID.applicationUUID);
  }

  @Post()
  create(@Body() createFightApplicationDto: CreateFightApplicationDto): Promise<FightApplicationDto> {
    return this.applicationsService.create(createFightApplicationDto);
  }

  @Delete(':applicationUUID')
  remove(@Param() applicationUUID: ApplicationUUIDParam) {
    return this.applicationsService.deleteByUUID(applicationUUID.applicationUUID);
  }
}
