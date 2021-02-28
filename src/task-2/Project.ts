import { Task } from './Task';

interface IProject {
  tasks: Task[];
  addTask(task: Task): void;
  editTask(task: Partial<Task> & { id: number }): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): Task[];
}

export class Project implements IProject {
  public tasks: Task[] = [];
  addTask(task: Task) {
    this.tasks.push(task);
  }
  editTask(task: Partial<Task>) {
    this.tasks.map(element => (task.id === element.getTaskId() ? Object.assign(element, task) : task));
  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTotalTime(): number {
    let time: number = 0;
    this.tasks.map(task => {
      return (time += task.getDurationTime());
    });
    return time;
  }
  getAllTasksByDeveloper(id: number): Task[] {
    return this.tasks.filter(task => {
      return task.getTaskDeveloper().getUserId() === id;
    });
  }
}
