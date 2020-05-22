import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user'
import { BirthdayResponse } from '../birthday-response'

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.css']
})
export class BirthdayFormComponent {

  user : User
  birthdayResponse : BirthdayResponse

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService
  ) { 
    this.user = new User();
    this.birthdayResponse = new BirthdayResponse();
  }

  submitted = false;


  onSubmit() { 
    this.userService.getPoem(this.user).subscribe(data => {
      console.log(data);
      this.birthdayResponse.firstName = data.firstName;
      this.birthdayResponse.lastName = data.lastName;
      this.birthdayResponse.daysToYourBirthDay = data.daysToYourBirthDay;
      this.birthdayResponse.age = data.age;
      this.birthdayResponse.poemText = data.poemText;
      console.log(this.birthdayResponse.poemText)
      this.submitted = true; 
    });
  }

}
