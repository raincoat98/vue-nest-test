import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly configService: ConfigService, // ConfigService 주입
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'), // CLIENT_ID
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'), // CLIENT_SECRET
      callbackURL: configService.get('CALLBACK_URL'),
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }
  // @nestjs/passport PassportStrategy를 상속
  // passport-google-oauth20 Strategy 사용
  // Strategy의 이름은 'google'로 지정
  // validate 함수 내에서, 성공적인 google 로그인에 대한 유효성 검증
  // google에서 보내주는 'profile' 정보만 로그로 기록

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: any,
  ) {
    try {
      console.log(profile);

      const jwt = 'placeholderJWT';
      const user = {
        jwt,
      };
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err, false);
    }
  }
}
