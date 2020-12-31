import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService ) { }

  ngOnInit(): void {
    this.getAllusers();
  }
  getAllusers(){
    this.userService.getAll().subscribe((res: User[]) =>  this.users = res );
   // console.log(user);
  }

}
