import { Controller, Get, Session, Query, Request } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user/login')
export class User_login_Controller {
  constructor(private readonly appService: UserService) {}
  @Get()
   async login(@Session() session, @Query() params: {userId: string, password: string}) {
      try {
          if (await this.appService.checkLogin(params.userId, params.password)){
              const user = {
                userId: params.userId,
                password: params.password
              };
              session.user = user;
              console.log(session.user);
              return JSON.stringify({isLoginOk: true, message: await this.appService.getUserInfo(params.userId)})
          } else {
              return JSON.stringify({isLoginOk: false, message: "用户验证失败"})
          }
      } catch (error) {
          return error.message;
      }
  }
}


@Controller('/user/logout')
export class User_logout_Controller {
  constructor(private readonly appService: UserService) {}
  @Get()
  async logout(@Request() req) {
    try {
        req.session.destroy();
        return JSON.stringify({isLogoutOk: true, message: "退出成功"})

    } catch (error) {
      return error.message;
    }
  }
}



@Controller('/user/loginStatus')
export class User_loginStatus_Controller {
  constructor(private readonly appService: UserService) {}
  @Get()
  async loginStatus(@Session() session) {
    try {
        if( session.user ){
            if (await this.appService.checkLogin(session.user.userId, session.user.password)){
                return JSON.stringify({isLoginOk: true, message: await this.appService.getUserInfo(session.user.userId)})
            }
            else {
              return JSON.stringify({isLoginOk: false, message: "user check fail"})
            }
            ;
        } else {
          return JSON.stringify({isLoginOk: false, message: "no session"})
        }
    } catch (error) {
      return error.message;
    }
  }
}
