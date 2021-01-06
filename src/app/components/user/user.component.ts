import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // guardar el listado de usuarios en esta variable.
  listUsers: User[];
  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];
  constructor(private ApiService: ApiService) {
    this.listUsers = [];
  }

  ngOnInit(): void {
    // obtener una lista de usuarios
    // this.ApiService.getAllUsers().subscribe((users) => {
    //   this.listUsers = users;
    // });
    this.getALlUser();
  }

  getALlUser() {
    this.ApiService.getAllUsers().subscribe((user) => {
      user.forEach((data: User) => {
        this.listUsers.push({
          email: data.email,
          id: data.id,
          name: data.name,
          phone: data.phone,
          username: data.username,
          website: data.website,
          publications: this.getRandomInt(10, 100),
          comments: this.getRandomInt(10, 100),
          transactions: this.getRandomInt(10, 100),
        });
      });
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
