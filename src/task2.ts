interface IUser {
  id: number;
  name: string;
}
class User {
  constructor(public name: string) {}
}

interface IApp {
  name: string;
  setName(name: string): void;
  projects: Project[];
  addProject(project: Project): void;
}

class App implements IApp {
  public projects: Project[];
  constructor(public name: string) {}
  setName(name: string) {
    this.name = name;
  }
  addProject(project: Project) {
    this.projects.push(project);
  }
}

interface IProject {
  tasks: Task[];
  addTask(task: Task): void;
  editTask(task: Partial<Task>): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): Task[];
}
class Project implements IProject {
  public tasks: Task[];
  addTask(task: Task) {}
  editTask(task: Partial<Task>) {}
  deleteTask(id: number) {}
  getTotalTime(): number {}
  getAllTasksByDeveloper(id: number): Task[] {}
}
interface ITask {
  id: number;
  title: string;
  durationMin: number;
  completed: boolean;
  developer: User | null;
  getInfo(): string;
}
class Task implements ITask {
  public id: number;
  public completed: boolean = false;
  public developer: User | null = null;
  constructor(public durationMin: number, public title: string) {}
  getInfo(): string {
    return `${this.id}`;
  }
}

export {};
