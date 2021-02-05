import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './dto/userDto';
import { User } from './schemas/User';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<UserDTO> {
    const { name, email } = await this.userService.create(user);
    return { name, email };
  }
}
