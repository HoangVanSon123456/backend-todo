import { BaseEntity } from 'src/bases/Base.entity';
import { Column, Entity } from 'typeorm';

@Entity('customer')
export class CustomerEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;
}
