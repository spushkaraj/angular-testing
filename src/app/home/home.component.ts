import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public users: any[];

  constructor(private usersService: UsersService){ 
    this.users = [];
  }

  ngOnInit(): void {
    this.usersService.all().subscribe( res => {
      this.users = res;
    });
  }
}
