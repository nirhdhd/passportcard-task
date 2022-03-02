import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  filter,
  from,
  Observable,
  startWith,
  switchMap,
  tap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  results$!: Observable<any[]> | undefined;

  constructor(public service: AppService) {}

  ngOnInit(): void {
    this.results$ = this.form.get('query')?.valueChanges.pipe(
      startWith(''),
      switchMap((query) =>
        this.service.userPosts$.pipe(
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

  form = new FormGroup({
    query: new FormControl(''),
  });

  onDelete(result: any) {
    const { id, userId } = result;
    console.log(result);
    this.service.deleteUserPost(id, userId);
  }
}
