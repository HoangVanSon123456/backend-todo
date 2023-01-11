import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UpdateCustomerDto } from '../dtos/UpdateCustomer';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private customerSerivce: CustomerService) {}

    @Get()
    async getAll(): Promise<CustomerEntity[]> {
        const customer = await this.customerSerivce.getAll();
        return customer;
    }

    @Get('/:id')
    async getCustomer(@Param('id', ParseIntPipe) id: number) {
        const customer = await this.customerSerivce.findOne(id);
        return customer;
    }

    @Post()
    async createCustomer(@Body() body: UpdateCustomerDto) {
        const customer = await this.customerSerivce.create(body);
        return customer;
    }

    @Delete('/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.customerSerivce.delete(id);
    }

    @Put('/:id')
    async updateCustomer(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCustomerDto) {
        const customer = await this.customerSerivce.update(id, body);
        return customer;
    }
}
