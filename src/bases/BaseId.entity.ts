import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseIdEntity {
    @PrimaryGeneratedColumn()
    id : number;
}