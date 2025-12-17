import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(email: string, password: string) {
    const exists = await this.prisma.user.findUnique({ where: { email } });
    if (exists) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.prisma.user.create({
      data: { email, password }, // потом заменим на хэш
    });

    return { id: user.id, email: user.email };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
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