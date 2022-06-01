
import { Injectable, InternalServerErrorException } from '@nestjs/common';

import ProfileCreateDto from '../dto/profile-create.dto';
import ProfileUpdateAllDto from '../dto/profile-update-all.dto';
import ProfileUpdateDto from '../dto/profile-update.dto';
import ProfileDto from '../dto/profile.dto';

// TODO: fake profile
@Injectable()
export class ProfileFakeService {
  private readonly profiles = new Map<string, ProfileDto>();

  async updateAll(profileUpdateAllDto: ProfileUpdateAllDto): Promise<ProfileDto[]> {
    const profiles = profileUpdateAllDto.profiles.map((profile) => {
      if (!this.profiles.has(profile)) {
        return;
      }

      const oldProfile = this.profiles.get(profile);
      const newProfile = {
        ...oldProfile,
        ...profileUpdateAllDto.data,
      };

      this.profiles.set(profile, newProfile);

      return newProfile;
    });

    return profiles;
  }

  async getOneByUUID(uuid: string): Promise<ProfileDto> {
    const profile = this.profiles.get(uuid);

    return profile;
  }

  async createOne(uuid: string, profileCreateDto: ProfileCreateDto): Promise<ProfileDto> {
    const newProfile = {
      nickname: profileCreateDto.nickname,
      entityId: uuid,
      avatarURL: profileCreateDto.avatarURL,
      status: 'free',
      fightApplicationId: null,
      fightId: null,
    } as ProfileDto;

    this.profiles.set(uuid, newProfile);

    return newProfile;
  }

  async updateOne(uuid: string, profileUpdateDto: ProfileUpdateDto): Promise<ProfileDto> {
    const oldProfile = this.profiles.get(uuid);
    const newProfile = {
      ...oldProfile,
      ...profileUpdateDto,
    };

    this.profiles.set(uuid, newProfile);

    return newProfile;
  }

  async getMany(uuids: string[]): Promise<ProfileDto[]> {
    return uuids.map((uuid) => {
      const profile = this.profiles.get(uuid);

      if (!profile) {
        throw new InternalServerErrorException();
      }

      return profile;
    });
  }
}
