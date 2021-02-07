import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './shared/localStrategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController, AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
