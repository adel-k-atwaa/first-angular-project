import { Component, computed, inject, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/Header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private usersService:UsersService = inject(UsersService);
  users = computed(() => this.usersService.getUsers());
  tasks = signal([]);
  selectedUser = computed(() => this.usersService.findUser(this.selectedUserId()));
  selectedUserId = signal("");

  onUserSelected(id: string) {
    this.selectedUserId.set(id);
  }

}
