import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/bases/BaseService';
import { Repository } from 'typeorm';
import { CowCategoryEntity } from '../entities/cow_category.entity';

@Injectable()
export class CowCategoryService extends BaseService<CowCategoryEntity> {
    constructor(
        @InjectRepository(CowCategoryEntity)
        public repo: Repository<CowCategoryEntity>
    ) {
        super(repo);
    }

    findOne(id: number) {
        if (!id) {
            return null;
        }
        return this.repo.findOne({ where: { id: id } });
    }
}
