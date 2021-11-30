import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  user!: User | undefined;
  constructor(private route: ActivatedRoute, private userServie: UserService) {
    this.route.params.subscribe((paramas) => {
      let id = paramas['id'];
      if(!id) id = 1;
      this.userServie.users.subscribe(users => {
        if (users.length ==0 ) return;
        this.user = this.userServie.userById(id);
      })
      
      
    });
  }

  ngOnInit(): void {}
}
