import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { HasRoles } from './modules/auth/has-roles.decorator';
import { JwtAuthGuard } from './modules/auth/jwt/jwt-auth.guard';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';
import { RoleGuard } from './modules/auth/roles.guard';
import { AuthService } from './modules/auth/services/auth.serivce';
import { Role } from './modules/user/types/role.enum';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private authService : AuthService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @HasRoles(Role.Admin)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('admin')
    onlyAdmin(@Request() req) {
        return req.user;
    }

    @HasRoles(Role.User)
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Get('user')
    onlyUser(@Request() req) {
        return req.user;
    }
}
