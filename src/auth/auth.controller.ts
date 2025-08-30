import { Controller } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('auth')
export class AuthController {
    constructor(private prisma: PrismaService) {}

}
