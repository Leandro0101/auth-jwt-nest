import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './shared/localStrategy';
import { JwtStrategy } from './shared/jwt.strategy';

@Module({
  imports: [UsersModule],
  controllers: [AuthController, AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
