import { Component, inject, input, output, signal } from '@angular/core';
import { Task } from '../../core/models/Task';
import { FormsModule} from '@angular/forms';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  isDialogOpen = input<boolean>(false);
  userId = input.required<string>();
  task = signal( new Task() );
  close = output();

  private tasksService: TasksService = inject(TasksService);

  onSubmit(){
    this.tasksService.addTask(this.task(),this.userId());
    this.close.emit();
  }

  onCancel(){
    this.close.emit();
  }

}
