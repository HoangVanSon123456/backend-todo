import { Module } from '@nestjs/common/decorators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CowCategoryController } from './controllers/cow_category.controller';
import { CowCategoryEntity } from './entities/cow_category.entity';
import { CowCategoryService } from './services/cow_category.service';

@Module({
    imports: [TypeOrmModule.forFeature([CowCategoryEntity])],
    controllers: [CowCategoryController],
    providers: [CowCategoryService],
    exports: [CowCategoryModule],
})
export class CowCategoryModule {}
