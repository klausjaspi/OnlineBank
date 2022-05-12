import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { userProfile } from './userProfile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public users: userProfile[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: userProfile[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
