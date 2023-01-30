import { BaseIdEntity } from 'src/bases/BaseId.entity';
import { Column, Entity } from 'typeorm';
import { Role } from '../types/role.enum';

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

    @Column({
        type: 'enum',
        enum: Role,
    })
    role: Role;
}
