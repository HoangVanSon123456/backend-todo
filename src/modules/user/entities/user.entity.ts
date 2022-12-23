import { BaseIdEntity } from 'src/bases/BaseId.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseIdEntity {
    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;
}
