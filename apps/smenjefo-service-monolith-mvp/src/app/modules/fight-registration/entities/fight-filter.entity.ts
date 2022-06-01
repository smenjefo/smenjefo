import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import Application from './application.entity';

@Entity()
export default class FightFilter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20 })
  type: string;

  @Column('smallint')
  value: number;

  @ManyToOne(() => Application, (application) => application.fightFilters)
  @JoinTable()
  application: Application;
}
