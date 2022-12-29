import { SetMetadata } from '@nestjs/common';
import { Role } from '../user/entities/role.enum';

export const HasRoles = (...roles: Role[]) => SetMetadata('role', roles);
