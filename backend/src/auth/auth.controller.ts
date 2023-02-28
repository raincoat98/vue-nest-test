import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(@Req() req, @Res() res) {
    // initiates the Google OAuth2 login flow
    res.send('googleLogin');
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback() {
    // handles the Google OAuth2 callback
    return 'hello';
  }
}
