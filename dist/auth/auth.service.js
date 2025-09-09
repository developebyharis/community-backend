"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const auth_helper_1 = require("./auth.helper");
let AuthService = class AuthService {
    jwtService;
    userService;
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async validateGoogleUser(profile) {
        const email = profile.email;
        if (!email) {
            throw new Error('not a university email');
        }
        let user = await this.userService.findByEmail(email);
        if (!user) {
            let username = (0, auth_helper_1.generateUsername)(profile.name);
            while (await this.userService.findByUsername(username)) {
                username = (0, auth_helper_1.generateUsername)(profile.name);
            }
            user = await this.userService.create({
                name: profile.name,
                email,
                username,
                provider: 'google',
                avatar: profile.picture,
            });
        }
        return user;
    }
    async generateJwt(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            username: user.username,
            role: user.role || 'USER',
        };
        return { accessToken: this.jwtService.sign(payload) };
    }
    async findUserFromDb(id) {
        return await this.userService.findUserById(id);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map