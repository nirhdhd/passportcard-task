import {
  BehaviorSubject,
  filter,
  from,
  Observable,
  startWith,
  switchMap,
  toArray,
} from 'rxjs';
import { AppService } from './app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('filterInput') filterInput: any;
  users$!: Observable<any[]>;
  //posts$!: Observable<any[]>;
  results$!: Observable<any[]> | undefined;
  userDetails: any = [];

  private userId: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  userId$: Observable<number> = this.userId.asObservable();

  private posts: BehaviorSubject<any> = new BehaviorSubject([]);
  posts$: Observable<any[]> = this.posts.asObservable();

  form = new FormGroup({
    query: new FormControl(''),
  });

  constructor(public service: AppService) {}

  ngOnInit() {
    this.users$ = this.service.getUsers();

    this.userId$
      .pipe(
        filter((id) => id !== -1),
        switchMap((id) => this.service.getUserPosts(id))
      )
      .subscribe((posts) => this.posts.next(posts));

    this.results$ = this.form.get('query')?.valueChanges.pipe(
      startWith(''),
      switchMap((query) =>
        this.posts$.pipe(
          switchMap((posts) =>
            from(posts).pipe(
              filter((post: any) =>
                query != '' && query != 'undefined'
                  ? post.title.includes(query) || post.body.includes(query)
                  : true
              ),
              toArray()
            )
          )
        )
      )
    );
  }

  selectUser = (user: any) => {
    this.userId.next(user.id);
    this.userDetails = user;
  };

  onDelete(result: any) {
    const { id } = result;

    this.posts.next([
      ...this.posts.getValue().filter((post: any) => post.id !== id),
    ]);

    this.users$ = this.service.getUsers();
  }
}
