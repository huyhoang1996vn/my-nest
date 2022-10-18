import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './schemas/auth.schemas';
const ROLES_KEY = 'roles'

@Injectable()
export class RolesGuard implements CanActivate {
    // A guard is a class annotated with the @Injectable() decorator. Guards should implement the CanActivate interface.
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        console.log("=== requiredRoles ", requiredRoles);
        
        if (!requiredRoles) {
            return true;
        }
        // const { user } = context.switchToHttp().getRequest();
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log("==== user ", user);
        
        return requiredRoles.some((role) => user.roles?.includes(role));
    }

}