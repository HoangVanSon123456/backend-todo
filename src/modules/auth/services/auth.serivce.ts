import { Injectable } from '@nestjs/common/decorators';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/services/user.service';
import bcrypt from 'bcrypt';
import { from, Observable } from 'rxjs';
@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findUser(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async hashPassword(password: string): Promise<Observable<string>> {
        return from<string>(await bcrypt.hash(password, 12));
    }

    comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
        return from(bcrypt.compare(password, storedPasswordHash));
    }
}
