import { Project } from './Project';
interface IApp {
  name: string;
  setName(name: string): void;
  projects: Project[] | null;
  addProject(project: Project): void;
}

export class App implements IApp {
  projects: Project[] = [];
  constructor(public name: string) {}
  setName(name: string): void {
    this.name = name;
    console.log(`Added name ${this.name}`);
  }
  addProject(project: Project): void {
    this.projects.push(project);
    console.log(`Added new project to ${this.name}`);
  }
}
