import { Controller, Get, Put, Patch, Param, Body } from '@nestjs/common';

import { ProfileFakeService } from '../services/profile-fake.service';
import { ProfileUUIDParam } from '../dto/profile-uuid.param';
import ProfileCreateDto from '../dto/profile-create.dto';
import ProfileUpdateDto from '../dto/profile-update.dto';
import ProfileUpdateAllDto from '../dto/profile-update-all.dto';

@Controller('profile')
export class ProfileController {
  constructor(
    // TODO: temporary in-memory logic
    private readonly profileService: ProfileFakeService,
  ) {}

  // TODO: json-patch implementation
  // @Patch()
  // @Header('content-type', 'application/json-patch+json')
  // updateStatuses(@Body() jsonPatchDto: JSONPatchDto[]) {
  //   return this.profileService.updateStatuses(jsonPatchDto);
  // }

  @Patch()
  updateAll(@Body() profileUpdateAllDto: ProfileUpdateAllDto) {
    return this.profileService.updateAll(profileUpdateAllDto);
  }

  @Get(':profileUUID')
  getOne(@Param() profileUUID: ProfileUUIDParam) {
    return this.profileService.getOneByUUID(profileUUID.profileUUID);
  }

  @Put(':profileUUID')
  createOne(
    @Param() profileUUID: ProfileUUIDParam,
    @Body() profileCreateDto: ProfileCreateDto,
  ) {
    return this.profileService.createOne(profileUUID.profileUUID, profileCreateDto);
  }

  @Patch(':profileUUID')
  updateOne(
    @Param() profileUUID: ProfileUUIDParam,
    @Body() profileUpdateDto: ProfileUpdateDto,
  ) {
    return this.profileService.updateOne(profileUUID.profileUUID, profileUpdateDto);
  }
}
