import { Expose } from 'class-transformer';
import { BaseIdDto } from 'src/bases/BaseId.dto';
import { Role } from '../types/role.enum';

export class UserDto extends BaseIdDto {

    @Expose()
    name: string;

    @Expose()
    username: string;

    @Expose()
    password: string;

    @Expose()
    email: string;

    @Expose()
    role : Role
}
