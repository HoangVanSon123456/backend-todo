import { BaseIdEntity } from 'src/bases/BaseId.entity';
import { Column, Entity } from 'typeorm';

@Entity('user_group')
export class UserGroupEntity extends BaseIdEntity {
    @Column()
    groupName: string;

    @Column()
    description: string;
}
