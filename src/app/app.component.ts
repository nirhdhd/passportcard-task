import { BehaviorSubject, filter, Observable, switchMap } from 'rxjs';
import { AppService } from './app.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('filterInput') filterInput: any;
  users$!: Observable<any[]>;
  userDetails: any = [];
  userName: any;

  constructor(public service: AppService) {}

  ngOnInit() {
    this.users$ = this.service.getUsers();
    this.service.getPosts();
  }

  selectUser = (user: any) => {
    //this.userId.next(user.id);
    this.service.updateDetails(user);

    this.userName = user.name;
    this.service.getUserPosts(user.id);
  };
}
