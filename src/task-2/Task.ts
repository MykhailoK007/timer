import { User } from './User';
import { generateId } from './sideFunctions';
interface ITask {
  readonly id: number;
  title: string;
  durationMin: number;
  completed: boolean;
  developer: User;
  getInfo(): string;
  getDurationTime(): number;
  getTaskDeveloper(): User;
  getTaskId(): number;
}
export class Task implements ITask {
  readonly id: number;
  completed: boolean = false;
  constructor(public durationMin: number, public title: string, public developer: User) {
    this.id = generateId();
  }
  getInfo(): string {
    return `${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}`;
  }
  getDurationTime(): number {
    return this.durationMin;
  }
  getTaskDeveloper(): User {
    return this.developer;
  }
  getTaskId(): number {
    return this.id;
  }
}
