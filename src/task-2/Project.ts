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
    console.log(this.tasks);
  }
  deleteTask(id: number) {
    this.tasks = this.tasks = this.tasks.length === 1 ? [] : this.tasks.filter(task => task.id != id);
    console.log('Task was deleted');
  }

  getTotalTime(): number {
    let time: number = 0;
    this.tasks.map(task => {
      return (time += task.getDurationTime());
    });
    console.log(`All tasks would be done at ${time} minutes`);
    return time;
  }
  getAllTasksByDeveloper(id: number): Task[] {
    this.tasks = this.tasks.filter(task => {
      return task.getTaskDeveloper().getUserId() === id;
    });
    console.log(this.tasks);
    return this.tasks;
  }
}
