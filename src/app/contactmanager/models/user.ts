import { Note } from './note';
export class User {
    id!: number;
    name!: string;
    birthDate!: Date;
    avatar!: string;
    bio!: string;
    notes: Note[] = [];
}
