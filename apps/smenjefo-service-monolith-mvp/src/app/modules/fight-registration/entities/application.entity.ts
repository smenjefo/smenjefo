import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
} from 'typeorm';

import FightFilter from './fight-filter.entity';
import FightTrigger from './fight-trigger.entity';
import Team from './team.entity';

@Entity()
export default class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column('varchar', { length: 36 })
  fightId: string;

  @Column('varchar', { length: 36 })
  ownerEntityId: string;

  @Column('varchar', { length: 20 })
  ownerNickname: string;

  @Column('varchar', { length: 20 })
  type: string;

  @Column('varchar', { length: 20 })
  mode: string;

  @Column('varchar', { length: 20 })
  status: string;

  @OneToMany(() => FightFilter, (fightFilter) => fightFilter.application, { cascade: ['insert', 'update', 'remove'] })
  fightFilters: FightFilter[];

  @OneToMany(() => FightTrigger, (fightTrigger) => fightTrigger.application, { cascade: ['insert', 'update', 'remove'] })
  fightTriggers: FightTrigger[];

  @Column()
  teamCapacity: number;

  @OneToMany(() => Team, (team) => team.application, { cascade: ['insert', 'update', 'remove'] })
  teams: Team[];
}
