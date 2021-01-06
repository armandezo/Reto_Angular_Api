import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.scss']
})
export class UserDetalleComponent implements OnInit {

  user:any; 
  loading:boolean = true; 
  constructor(private route:ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.ApiService.getAllUsersById(params.get('id')).subscribe(user => {
          this.user = user; 
          this.loading = !this.loading; 
        });
    });
  }

}
