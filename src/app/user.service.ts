import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

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

  public getPoem(user:User): Observable<any>{
    console.log(user);
    const dateSendingToServer = new DatePipe('en-US').transform(user.birthday, 'dd/MM/yyyy')

    console.log(this.birthDayGreetingUrl  + "?fullName=" + user.fullName   + "&birthDay=" + dateSendingToServer);
    
    return this.http.get<User>(
      this.birthDayGreetingUrl  + "?fullName=" + user.fullName  + "&birthDay=" + dateSendingToServer, this.httpOptions)
  }

}
