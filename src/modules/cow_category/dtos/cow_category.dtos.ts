import { Expose } from 'class-transformer';
import { BaseIdDto } from 'src/bases/BaseId.dto';

export class CowCategoryDtos extends BaseIdDto {
    @Expose()
    cowCategoryName: string;

    @Expose()
    description: string;
}
