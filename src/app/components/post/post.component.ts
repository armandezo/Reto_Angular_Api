import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  loading:boolean = true; 
  public postsList:Post[]; 
  public postFilter:Post[];

  page = 1 ; 
  pageSize = 9;  
  startSlice:number = 1; 
  endSlice:number; 
  count = 0; 
  
  constructor(private route: ActivatedRoute,
              private ApiService:ApiService) { }

  ngOnInit(): void {
    // obtener el id que se pasa por la url 

     this.route.paramMap.subscribe(params => {

       // determinar si el esta ruta esta reciviendo una id
        if(params.get("id")){
          // si obtengo la id entonces debo obtener la informacion
            this.ApiService.getUserPosts(params.get('id')).subscribe(posts => {
                this.postsList = posts; 
                this.postFilter = posts;
                this.count = this.postsList.length; 
                this.loading = !this.loading; 
            });
        } else {
           // encaso de no tener una id, deberea llamar el metodo getPost().
           // El metodo getPosts() retorna un arreglo de posts 
            this.ApiService.getPosts().subscribe(posts => {
              this.postsList = posts; 
              this.postFilter = posts;
              this.count = this.postsList.length; 
              this.loading  = !this.loading ;  
          }); 
        }
     });
  }

  // recive como parametro la pagina a la que desea ir. 
  //  luego carga los datos para esa pagina..
  
   handlePageChange(event) {
      this.loading = !this.loading; 
      this.postFilter = []; 

      setTimeout(  () => {
        this.loading = !this.loading;
        this.postFilter = this.postsList;  
        this.page = event;
        this.startSlice = event * this.pageSize;   
        window.scroll(0, 0);
      }, 1000) 
  }

  
}
