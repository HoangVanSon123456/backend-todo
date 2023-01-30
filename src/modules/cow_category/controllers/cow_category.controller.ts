import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateCowCategory } from '../dtos/UpdateCowCategory';
import { CowCategoryEntity } from '../entities/cow_category.entity';
import { CowCategoryService } from '../services/cow_category.service';

@Controller('cow_category')
export class CowCategoryController {
    constructor(public cowCategoryService: CowCategoryService) {}

    @Get()
    async getAll(): Promise<CowCategoryEntity[]> {
        const res = await this.cowCategoryService.getAll();
        return res;
    }

    @Get('/:id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<CowCategoryEntity> {
        const res = await this.cowCategoryService.findOne(id);
        return res;
    }

    @Post()
    async create(@Body() body: Partial<UpdateCowCategory>) {
        const res = await this.cowCategoryService.create(body);
        return res;
    }

    @Put('/:id')
    async updateUser(@Param() id: number, @Body() body: Partial<UpdateCowCategory>): Promise<void> {
        await this.cowCategoryService.update(id, body);
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.cowCategoryService.delete(id);
    }
}
