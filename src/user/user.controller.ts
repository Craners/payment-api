import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<any> {
    return await this.userService.getUsers();
  }

  @Post()
  async createSandboxUser(): Promise<any> {
    return await this.userService.createSandboxUser();
  }
}
