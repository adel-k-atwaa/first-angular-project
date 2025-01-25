import { Injectable, signal } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import {type Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = signal(dummyTasks)
  constructor() {
    this.getTasks();
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(task: Task,userId: string) {
    task.userId = userId;
    task.id = "t" + Math.random().toString();
    this.tasks.set([...this.tasks(), task]);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  private getTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }

}
