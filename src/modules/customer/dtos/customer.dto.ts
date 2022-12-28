import { Expose } from 'class-transformer';
import { BaseIdDto } from 'src/bases/BaseId.dto';

export class CustomerDto extends BaseIdDto {
    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    username: string;
}
