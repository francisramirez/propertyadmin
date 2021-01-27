import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(authUser:any){
  let userArray =[];

  if (localStorage.getItem('Users')) {
     userArray=JSON.parse(localStorage.getItem('Users'));
  }

  return userArray.find(user => user.userName === authUser.userName
                      && user.password === authUser.password);
}

}
