import { Expose } from 'class-transformer';
import { BaseIdDto } from 'src/bases/BaseId.dto';

export class UserGroupDto extends BaseIdDto {
    @Expose()
    groupName: string;

    @Expose()
    description: string;
}
