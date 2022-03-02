import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, observable, Observable, of, take } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public details = new BehaviorSubject<any>({});
  public details$ = this.details.asObservable();

  public userPosts = new BehaviorSubject<any>([]);
  public userPosts$ = this.userPosts.asObservable();

  public postsConters = new BehaviorSubject<any>([]);
  public postsConters$ = this.postsConters.asObservable();

  constructor(private http: HttpClient) {}

  // *****  Boris exemple for custom selector  *******
  //
  // get activePosts(): Observable<any[]> {
  //   return this.userPosts$.pipe(
  //     filter(post => post.status === true)
  //   );
  // }

  // searchPost = (q: string): Observable<any[]> => {
  //   return this.userPosts$.pipe(
  //     filter(post => post.title.includes(q))
  //   );
  // }
  // ************************************************

  createParams() {
    let randomNumber = 100 + Math.round(Math.random() * 9900);
    return new HttpParams().set('xsrf', randomNumber);
  }

  updateDetails(userDetails: any) {
    this.details.next(userDetails);
  }

  getUsers(): Observable<any> {
    return this.http.get<{ d: any }>(`${environment.URL}users`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: this.createParams(),
    });
  }

  getUserPosts(userId: number) {
    this.http
      .get<{ d: any }>(`${environment.URL}posts?userId=${userId}`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: this.createParams(),
      })
      .subscribe((posts: any) => {
        this.userPosts.next(posts);
      });
  }

  getPosts() {
    this.http
      .get(`${environment.URL}posts`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: this.createParams(),
      })
      .subscribe((posts: any) => {
        let postsConters = Array(posts[posts.length - 1].userId).fill(0);
        posts.map((x: any) => postsConters[x.userId - 1]++);
        this.postsConters.next(postsConters);
      });
  }

  updatePostsConters(userId: number) {
    this.postsConters$.pipe(take(1)).subscribe((arr) => {
      arr[userId - 1]--;
      this.postsConters.next(arr);
    });
  }

  deleteUserPost(postId: number, userId: number): Observable<any> {
    this.updatePostsConters(userId);
    return this.http.delete<{ d: any }>(`${environment.URL}posts/${postId}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: this.createParams(),
    });
  }
}
