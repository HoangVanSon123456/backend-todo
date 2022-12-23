import { Expose } from "class-transformer";
import { IsOptional } from "class-validator";
import { IsNumber } from "class-validator/types/decorator/decorators";

export class BaseIdDto {
    @Expose()
    @IsOptional()
    @IsNumber()
    id: number;
}