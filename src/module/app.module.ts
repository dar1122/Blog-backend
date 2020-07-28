import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { UserService } from '../service/user.service';
import { User_login_Controller , User_loginStatus_Controller, User_logout_Controller } from '../controller/user.controller';


@Module({
  imports: [],
  controllers: [AppController, User_login_Controller, User_loginStatus_Controller,User_logout_Controller],
  providers: [AppService, UserService],
})
export class AppModule {}
