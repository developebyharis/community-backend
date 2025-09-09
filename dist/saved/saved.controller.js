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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedController = void 0;
const common_1 = require("@nestjs/common");
const saved_service_1 = require("./saved.service");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../users/user.decorator");
let SavedController = class SavedController {
    savedService;
    constructor(savedService) {
        this.savedService = savedService;
    }
    savedPost(userId, postId) {
        return this.savedService.savedPost(userId, postId);
    }
    savedComment(userId, commentId) {
        return this.savedService.savedComment(userId, commentId);
    }
    getMySavedPost(userId) {
        return this.savedService.getMySavedPost(userId);
    }
    getMySavedComment(userId) {
        return this.savedService.getMySavedComment(userId);
    }
};
exports.SavedController = SavedController;
__decorate([
    (0, common_1.Post)('/post'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __param(1, (0, common_1.Body)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "savedPost", null);
__decorate([
    (0, common_1.Post)('/comment'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __param(1, (0, common_1.Body)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "savedComment", null);
__decorate([
    (0, common_1.Get)('/post'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "getMySavedPost", null);
__decorate([
    (0, common_1.Get)('/comment'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "getMySavedComment", null);
exports.SavedController = SavedController = __decorate([
    (0, common_1.Controller)('saved'),
    __metadata("design:paramtypes", [saved_service_1.SavedService])
], SavedController);
//# sourceMappingURL=saved.controller.js.map