import { generateId } from './sideFunctions';
interface IUser {
  id: number;
  name: string;
  getUserId(): number;
}
export class User implements IUser {
  id: number;
  constructor(public name: string) {
    this.id = generateId();
  }
  getUserId(): number {
    return this.id;
  }
}
