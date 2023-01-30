import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { HasRoles } from 'src/modules/auth/has-roles.decorator';
import { JwtAuthGuard } from 'src/modules/auth/jwt/jwt-auth.guard';
import { RoleGuard } from 'src/modules/auth/roles.guard';
import { AuthService } from 'src/modules/auth/services/auth.serivce';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { Role } from '../types/role.enum';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    // @HasRoles(Role.Admin)
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Get()
    async getAll(): Promise<UserEntity[]> {
        const response = await this.userService.getAll();
        return response;
    }

    @Get('/:id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
        const response = await this.userService.findOne(id);
        return response;
    }

    @Post()
    async createUser(@Body() body: Partial<UpdateUserDto>) {
        const response = await this.userService.create(body);
        return response;
    }

    @Put('/:id')
    async updateUser(@Param() id: number, @Body() userEntity: UserEntity): Promise<void> {
        await this.userService.update(id, userEntity);
    }

    @Delete('/:id')
    async delete(@Param() id: number): Promise<void> {
        await this.userService.delete(id);
    }
}
