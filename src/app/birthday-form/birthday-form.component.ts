import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user'

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.css']
})
export class BirthdayFormComponent {

  user : User
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService
  ) { 
    this.user = new User();
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.userService.getPoem(this.user)
  }

}
