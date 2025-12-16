"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    users = [];
    nextId = 1;
    register(email, password) {
        const exists = this.users.find((u) => u.email === email);
        if (exists) {
            throw new common_1.BadRequestException('User already exists');
        }
        const user = { id: this.nextId++, email, password };
        this.users.push(user);
        return { id: user.id, email: user.email };
    }
    login(email, password) {
        const user = this.users.find((u) => u.email === email);
        if (!user || user.password !== password) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return {
            user: { id: user.id, email: user.email },
            accessToken: `fake-token-${user.id}`,
        };
    }
    logout() {
        return { success: true };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map