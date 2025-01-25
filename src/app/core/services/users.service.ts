import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = DUMMY_USERS;
  constructor() {
    this.getUsersFromLocalStorage();
  }

  getUsers(){
    return this.users;
  }

  findUser(id: string) {
    return this.users.find(user => user.id === id);
  }

  private saveUsersToLocalStorage() {

    localStorage.setItem('users', JSON.stringify(this.users));
  }
  private getUsersFromLocalStorage() {
      const users = localStorage.getItem('users');
      if (users) {
        this.users = JSON.parse(users);
      }else{
        this.saveUsersToLocalStorage();
      }
    }
  }
