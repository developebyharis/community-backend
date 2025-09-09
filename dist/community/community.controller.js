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
exports.CommunityController = void 0;
const common_1 = require("@nestjs/common");
const community_service_1 = require("./community.service");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../users/user.decorator");
const community_dto_1 = require("./dto/community.dto");
let CommunityController = class CommunityController {
    communityService;
    constructor(communityService) {
        this.communityService = communityService;
    }
    async fetchMyCommunity(userId) {
        const myCommunities = await this.communityService.getMyCommunity(userId);
        const myFollowedCommunities = await this.communityService.getUserFollowedCommunities(userId);
        return {
            myCommunities,
            myFollowedCommunities,
        };
    }
    createCommunity(userId, data) {
        return this.communityService.createCommunity(userId, data);
    }
    fetchAllCommunities() {
        return this.communityService.getAllCommunities();
    }
    followCommunity(userId, communityId) {
        return this.communityService.followCommunity(userId, communityId);
    }
    unfollowCommunity(userId, communityId) {
        return this.communityService.unfollowCommunity(userId, communityId);
    }
    updateCommunity(data, id) {
        return this.communityService.updateCommunity(data, id);
    }
    deleteCommunity(id) {
        return this.communityService.deleteCommunity(id);
    }
};
exports.CommunityController = CommunityController;
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "fetchMyCommunity", null);
__decorate([
    (0, common_1.Post)('me'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, community_dto_1.CreateCommunityDto]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "createCommunity", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "fetchAllCommunities", null);
__decorate([
    (0, common_1.Patch)('follow/:id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "followCommunity", null);
__decorate([
    (0, common_1.Patch)('unfollow/:id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, user_decorator_1.GetUser)('userId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "unfollowCommunity", null);
__decorate([
    (0, common_1.Patch)('me/:id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [community_dto_1.UpdateCommunityDto, String]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "updateCommunity", null);
__decorate([
    (0, common_1.Delete)('me/:id'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "deleteCommunity", null);
exports.CommunityController = CommunityController = __decorate([
    (0, common_1.Controller)('community'),
    __metadata("design:paramtypes", [community_service_1.CommunityService])
], CommunityController);
//# sourceMappingURL=community.controller.js.map