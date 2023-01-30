import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupController } from './controllers/user_group.controller';
import { UserGroupEntity } from './entities/user_group.entity';
import { UserGroupService } from './services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserGroupEntity])],
    controllers: [UserGroupController],
    providers: [UserGroupService],
    exports: [UserGroupModule],
})
export class UserGroupModule {}
