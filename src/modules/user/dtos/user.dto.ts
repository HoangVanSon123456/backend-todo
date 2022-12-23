import { Expose } from 'class-transformer';
import { PrimaryGeneratedColumn } from 'typeorm';

export class UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    name: string;

    @Expose()
    username: string;

    @Expose()
    password: string;

    @Expose()
    email: string;
}
