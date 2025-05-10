import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type ReviewStatus = 'accepted' | 'pending' | 'rejected' | 'priority';

@Entity()
export class Work {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  logo: string;

  @Column('decimal')
  salary: number;

  @Column()
  applyDate: Date;

  @Column({
    type: 'enum',
    enum: ['accepted', 'pending', 'rejected', 'priority'],
  })
  review: ReviewStatus;
}
