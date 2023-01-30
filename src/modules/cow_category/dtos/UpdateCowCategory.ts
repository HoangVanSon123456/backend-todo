import { IsString } from 'class-validator';

export class UpdateCowCategory {
    @IsString()
    cowCategoryName: string;

    @IsString()
    description: string;
}
