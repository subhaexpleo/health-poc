//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('policy_applications_copy')
export class policy_applications_copy {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'application_id',
    nullable: false,
    type: 'text',
    primary: false,
  })
  application_id: string;
  @Column({ name: 'fullname', nullable: false, type: 'text', primary: false })
  fullname: string;
  @Column({ name: 'dob', nullable: false, type: 'text', primary: false })
  dob: Date;
  @Column({ name: 'age', nullable: false, type: 'bigint', primary: false })
  age: number;
  @Column({ name: 'gender', nullable: false, type: 'text', primary: false })
  gender: string;
  @Column({ name: 'mobile', nullable: false, type: 'bigint', primary: false })
  mobile: number;
  @Column({ name: 'email', nullable: false, type: 'text', primary: false })
  email: string;
  @Column({ name: 'address', nullable: false, type: 'text', primary: false })
  address: string;
  @Column({ name: 'policy', nullable: false, type: 'text', primary: false })
  policy: string;
  @Column({ name: 'plan_type', nullable: false, type: 'text', primary: false })
  plan_type: string;
  @Column({
    name: 'base_premium',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  base_premium: number;
  @Column({
    name: 'discount_percentage',
    nullable: false,
    type: 'bigint',
    primary: false,
  })
  discount_percentage: number;
  @Column({
    name: 'medical_declaration',
    nullable: false,
    type: 'jsonb',
    primary: false,
  })
  medical_declaration: any;
  @Column({ name: 'status', nullable: false, type: 'text', primary: false })
  status: string;
  @Column({ name: 'created_at', nullable: false, type: 'text', primary: false })
  created_at: Date;
}
