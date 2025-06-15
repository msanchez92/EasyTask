import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from "./user/user";

import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    User,
    Tasks
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'EasyTask';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return DUMMY_USERS.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id:string) {
    this.selectedUserId =  id;
  }
}
