import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
} from 'typeorm';

import FightTeam from './fight-team.entity';
import Round from './round.entity';

@Entity()
export default class Fight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string;

  @Column('varchar', { length: 36 })
  fightApplicationId: string;

  @Column('varchar', { length: 20 })
  fightConfigurationType: string;

  @Column('varchar', { length: 36 })
  currentRoundId: string;

  @Column('varchar', { length: 20 })
  type: string;

  @Column('varchar', { length: 20 })
  status: string;

  @OneToMany(() => FightTeam, (fightTeam) => fightTeam.fight, { cascade: ['insert', 'update'] })
  teams: FightTeam[];

  @OneToMany(() => Round, (round) => round.fight, { cascade: ['insert', 'update'] })
  rounds: Round[];
}
