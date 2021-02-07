import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [AuthService],
})
export class AuthModule {}
