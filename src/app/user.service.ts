import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private birthDayGreetingUrl = "http://localhost:8080/birthday/v1/poems";

  constructor(private http: HttpClient) { 
    
  }
  
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  public getPoem(user:User): Observable<User>{
    console.log(user);
    console.log(this.birthDayGreetingUrl  + "?fullName=" + user.fullName   + "&birthDay=" + user.birthday);
    return this.http.get<User>(
      this.birthDayGreetingUrl  + "?fullName=" + user.fullName  + "&birthDay=" + user.birthday);
  }

}
