import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ijobs } from '../models/jobs';
import { Post } from '../models/Post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  /*
  Este metodo se connecta al enpoint /user para extraer 
  un listado de usuarios 
  */

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.API_URL}/users`);
  }

  /*
   Permite obtener la informacion de un usuario en particular.
   recive un parametro id para poder extrar el usuariod indicado. 
  */

  public getAllUsersById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}/users/${id}`);
  }

  /*
  Obtener una lista de posts atraves del enpoint /posts
  */

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.API_URL}/posts`);
  }

  /*
  Extrae una lista de commentarios, que pertenecen a un post,
  requiere de la id del post para poder extrar los commentarios 
  */

  public getComments(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `${this.API_URL}/comments?postId=${id}`
    );
  }

  public getJobs(id: string) {
    return this.httpClient.get<Ijobs[]>(`${this.API_URL}/todos?userId=${id}`);
  }

  /*
  Extrae los posts que a realizado un usuario en particular.
  necesita el id del ususario para poder obtener la lista
  */
  public getUserPosts(idUsuario: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${this.API_URL}/users/${idUsuario}/posts`
    );
  }

  /*
  Esta ruta simula la creacion de un post, 
  la informacion se envia al api, y luego esta retorna un 
  objeto con la informacion enviada.  
  */
  public createPost(post: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API_URL}/posts`, post);
  }
}
