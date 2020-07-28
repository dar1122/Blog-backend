import { Injectable } from '@nestjs/common';
export interface UserInfo {
  username: string
  avatar: string
}

function checkLoginPromise(userid: string, password: string): Promise<boolean> {
  return new Promise(((resolve, reject) => {
    try {
      resolve(true)
    } catch (e) {
      console.error(e.message);
      reject(e.message)
    }
    })
  )
}



function getUserInfoPromise(userId: string): Promise<UserInfo> {
    return new Promise(((resolve, reject) => {
      try {
        resolve({username: "dar", avatar: ""})
      } catch (e) {
        console.error(e.message);
        reject(e.message)
      }
    }))
}




@Injectable()
export class UserService {
  async checkLogin(userid: string, password: string): Promise<boolean> {
    return await checkLoginPromise(userid, password);
  }

  async getUserInfo(userid: string): Promise<UserInfo> {
    return await getUserInfoPromise(userid);
  }
}
