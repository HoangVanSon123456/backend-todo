import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

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
    async createUser(@Body() body: UserEntity){
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
