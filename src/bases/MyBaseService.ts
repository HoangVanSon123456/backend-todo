import { BadGatewayException } from '@nestjs/common';
import {Repository } from 'typeorm';

export class MyBaseService<Entity> {
    constructor(public repo: Repository<Entity>) {}

    getAll(): Promise<Entity[]> {
        try {
            return <Promise<Entity[]>>this.repo.find();
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    create(entity: any): Promise<Entity> {
        try {
            return new Promise<Entity>((resolve, reject) => {
                this.repo
                    .save(entity)
                    .then((created) => resolve(created))
                    .catch((err) => reject(err));
            });
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    delete(id: number) {
        try {
            return this.repo.delete(id);
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    update(id: number, entity: any) {
        try {
            if (id !== null) {
                this.repo.update(id, entity);
            }
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

}
