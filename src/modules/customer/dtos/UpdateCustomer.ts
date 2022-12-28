import { IsString } from 'class-validator';

export class UpdateCustomerDto {
    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    email: string;
}
