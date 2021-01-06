import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  // gurdar el listado de commentarios en esta variable. 
  listComments:any[]; 
  
  constructor(private ApiService:ApiService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {

    // obtener la id que se pasa atravez de la ruta 
    this.route.paramMap.subscribe(params => {
      const id = params.get("id") ; 
      
      // extra un listado de commentarios.
      // toma como parametro el id del post 

      this.ApiService.getComments(id).subscribe(comments => {
        this.listComments = comments; 
        console.log(this.listComments);
      });

    }) 
  }

}
