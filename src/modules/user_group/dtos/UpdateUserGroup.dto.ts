import { IsString } from 'class-validator';

export class UpdateUserGroupDto {
    @IsString()
    groupName: string;

    @IsString()
    description: string;
}
