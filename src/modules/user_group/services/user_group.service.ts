import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/bases/BaseService';
import { Repository } from 'typeorm';
import { UserGroupEntity } from '../entities/user_group.entity';

@Injectable()
export class UserGroupService extends BaseService<UserGroupEntity> {
    constructor(
        @InjectRepository(UserGroupEntity)
        public repo: Repository<UserGroupEntity>
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
