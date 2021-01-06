import { UserJobsComponent } from './components/user/user-jobs/user-jobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/post/comments/comments.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { PostComponent } from './components/post/post.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { UserDetalleComponent } from './components/user/user-detalle/user-detalle.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  {
    path: 'post',
    children: [
      { path: '', component: PostComponent },
      { path: 'create', component: NewPostComponent },
      { path: 'comments/:id', component: CommentsComponent },
      { path: ':id', component: PostComponent },
    ],
  },
  {
    path: 'user',
    children: [
      { path: 'list', component: UserComponent },
      { path: 'detalle/:id', component: UserDetalleComponent },
      { path: 'job/:id', component: UserJobsComponent },
    ],
  },
  { path: 'reporte', component: ReporteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
