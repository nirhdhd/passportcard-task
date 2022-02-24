import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  createParams() {
    let randomNumber = 100 + Math.round(Math.random() * 9900);
    return new HttpParams().set('xsrf', randomNumber);
  }

  getUsers(): Observable<any> {
    return this.http.get<{ d: any }>(`${environment.URL}users`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: this.createParams(),
    });
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get<{ d: any }>(
      `${environment.URL}posts?userId=${userId}`,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: this.createParams(),
      }
    );
  }

  deleteUserPost(postId: number): Observable<any> {
    return this.http.delete<{ d: any }>(`${environment.URL}posts/${postId}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: this.createParams(),
    });
  }
}
