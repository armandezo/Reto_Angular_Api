import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


  postForm:FormGroup; 
  constructor(private ApiService:ApiService,
              private formBuilder:FormBuilder,
              private router:Router) { }


  ngOnInit(): void {

    // crear los controladores y el fromGroup 
    // deseita validar usando el module Validators 
    this.postForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      userId: new  FormControl('1')
    });
  }

// resive un parametro con el valor que tiene el formGroup (postForm).
// luego  esa informacion  se pasa al metodo createPost().
// el metodo create post envia la informacion al servidor atraves de la api.

  crearPost(data:any){
    this.ApiService.createPost(data.value).subscribe(res => {
        this.router.navigate(["/post"]);
        console.log(res);
    }); 
  }

}
