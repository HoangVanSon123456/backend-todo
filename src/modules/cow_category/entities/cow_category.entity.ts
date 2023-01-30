import { BaseIdEntity } from 'src/bases/BaseId.entity';
import { Column, Entity } from 'typeorm';

@Entity('cow_category')
export class CowCategoryEntity extends BaseIdEntity {
    @Column()
    cowCategoryName: string;

    @Column()
    description: string;
}
