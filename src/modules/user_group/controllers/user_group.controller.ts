import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { HasRoles } from 'src/modules/auth/has-roles.decorator';
import { JwtAuthGuard } from 'src/modules/auth/jwt/jwt-auth.guard';
import { RoleGuard } from 'src/modules/auth/roles.guard';
import { AuthService } from 'src/modules/auth/services/auth.serivce';
import { UpdateUserGroupDto } from '../dtos/UpdateUserGroup.dto';
import { UserGroupEntity } from '../entities/user_group.entity';
import { UserGroupService } from '../services/user.service';

@Controller('user_group')
export class UserGroupController {
    constructor(private userGroupService: UserGroupService) {}

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    async getAll(): Promise<UserGroupEntity[]> {
        const response = await this.userGroupService.getAll();
        return response;
    }

    @Get('/:id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserGroupEntity> {
        const response = await this.userGroupService.findOne(id);
        return response;
    }

    @Post()
    async createUser(@Body() body: Partial<UpdateUserGroupDto>) {
        const response = await this.userGroupService.create(body);
        return response;
    }

    @Put('/:id')
    async updateUser(@Param() id: number, @Body() body: Partial<UpdateUserGroupDto>): Promise<void> {
        await this.userGroupService.update(id, body);
    }

    @Delete('/:id')
    async delete(@Param() id: number): Promise<void> {
        await this.userGroupService.delete(id);
    }
}
