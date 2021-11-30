import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss'],
})
export class NewContactDialogComponent implements OnInit {
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];

  constructor(
    private matDialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService
  ) {}

  name = new FormControl('', [Validators.required]);

  getErrorMessage(): string {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
  user!: User;
  ngOnInit(): void {
    this.user = new User();
  }

  save() {
    this.user.name = this.name.value;
    this.userService.addUser(this.user).then((user) => {
      this.matDialogRef.close(this.user);
    });
  }
  dismiss() {
    this.matDialogRef.close();
  }
}
