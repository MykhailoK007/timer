import { generateId } from './sideFunctions';
interface IUser {
  id: number;
  name: string;
  getUserId(): number;
}
export class User implements IUser {
  id: number = generateId();
  constructor(public name: string) {}
  getUserId(): number {
    return this.id;
  }
}
