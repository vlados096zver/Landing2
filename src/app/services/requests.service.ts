import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  public getTeam():Observable<any>{
    return this.http.get('https://gorest.co.in/public/v2/users');
  }

  public getBlogPost():Observable<any>{
    return this.http.get('https://gorest.co.in/public/v2/posts');
  }
}
