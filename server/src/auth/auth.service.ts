import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  
  interface User {
    id: number;
    email: string;
    password: string;
  }
  
  @Injectable()
  export class AuthService {
    private users: User[] = [];
    private nextId = 1;
  
    register(email: string, password: string) {
      const exists = this.users.find((u) => u.email === email);
      if (exists) {
        throw new BadRequestException('User already exists');
      }
  
      const user: User = { id: this.nextId++, email, password };
      this.users.push(user);
  
      return { id: user.id, email: user.email };
    }
  
    login(email: string, password: string) {
      const user = this.users.find((u) => u.email === email);
      if (!user || user.password !== password) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      return {
        user: { id: user.id, email: user.email },
        accessToken: `fake-token-${user.id}`,
      };
    }
  
    logout() {
      return { success: true };
    }
  }