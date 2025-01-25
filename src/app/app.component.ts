import { Component, computed, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/Header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks = signal([]);
  selectedUser = computed(() => this.users.find((user) => user.id == this.selectedUserId() ));
  selectedUserId = signal("");

  onUserSelected(id: string) {
    this.selectedUserId.set(id);
  }

}
