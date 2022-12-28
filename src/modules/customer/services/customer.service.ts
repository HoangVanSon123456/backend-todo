import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/bases/BaseService';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class CustomerService extends BaseService<CustomerEntity> {
    constructor(
        @InjectRepository(CustomerEntity)
        public repo: Repository<CustomerEntity>
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
