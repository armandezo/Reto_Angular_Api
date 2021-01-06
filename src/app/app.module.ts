import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/post/comments/comments.component';
import { UserComponent } from './components/user/user.component'; 
import { UserDetalleComponent } from './components/user/user-detalle/user-detalle.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ChartsModule } from 'ng2-charts';
import { UserJobsComponent } from './components/user/user-jobs/user-jobs.component';
@NgModule({
  declarations: [
    AppComponent, 
    PostComponent,
    CommentsComponent,
    UserComponent, 
    UserDetalleComponent, NewPostComponent, ReporteComponent, UserJobsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,  
    SharedModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
