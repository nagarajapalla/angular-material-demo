import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  addUser(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      user.id = this.datasource.users.length + 1;
      this.datasource.users.push(user);
      this._users.next(Object.assign({}, this.datasource).users);
      resolve(user);
    });
  }

  private datasource: {
    users: User[];
  };

  private _users: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.datasource = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  userById(id: number) {
    return this.datasource.users.find((x) => x.id == id);
  }

  loadall() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(userUrl).subscribe(
      (data) => {
        this.datasource.users = data;
        this._users.next(Object.assign({}, this.datasource).users);
      },
      (error) => {
        console.log('Failed to fetch users');
      }
    );
  }
}
