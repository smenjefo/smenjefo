import { Module } from '@nestjs/common';

import { ProfileController } from './controllers/profile.controller';
import { ProfileFakeService } from './services/profile-fake.service';

@Module({
  controllers: [
    ProfileController
  ],
  providers: [
    ProfileFakeService,
  ],
  exports: [
    ProfileFakeService,
  ],
})
export class ProfileModule {}
