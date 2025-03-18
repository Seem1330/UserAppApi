import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  userList: any[] =[];

  constructor(private http: HttpClient){

  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:7141/api/User/getUsers').subscribe((res:any) => {
      this.userList = res;
    })
  }
}
