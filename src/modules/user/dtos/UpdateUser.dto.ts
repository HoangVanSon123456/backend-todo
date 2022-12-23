
import { IsString } from 'class-validator';
import { BaseIdDto } from 'src/bases/BaseId.dto';

export class UpdateUserDto extends BaseIdDto {
    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    email: string;
}
