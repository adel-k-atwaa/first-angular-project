import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../core/models/Task';
import { CardComponent } from "../../shared/component/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  private taskService: TasksService = inject(TasksService);
  onCompleteTask() {
    this.taskService.removeTask(this.task().id);
  }
}
