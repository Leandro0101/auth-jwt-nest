import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './shared/localStrategy';

@Module({
  imports: [UsersModule],
  controllers: [AuthController, AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
