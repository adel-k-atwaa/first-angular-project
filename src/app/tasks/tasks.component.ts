import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../core/models/User';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from '../core/models/Task';
import { TasksService } from '../core/services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  isAddingTask = signal(false);
  userTasks = computed(() => this.tasksService.getUserTasks(this.user()?.id!)??[]);
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onClose() {
    this.isAddingTask.set(false);
  }
}
