import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent implements OnInit, OnDestroy {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  // Reporte en lineas
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  // reporte Circular
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  usuarios: User[];
  posts: Post[];

  serviceSuscription: Subscription;

  constructor(private ApiService: ApiService) {
    this.barChartData = [
      { data: [], label: 'Post Publicado Mes Presente' },
      {
        data: [],
        label: 'Publicaciones Mes Pasado',
      },
    ];
    this.doughnutChartData = [[10, 10, 10, 10, 10, 10, 10, 10, 10, 10]];
  }

  async ngOnInit() {
    await this.requestData();
  }

  ngOnDestroy() {
    this.serviceSuscription.unsubscribe();
  }

  // extraer la informacion desde el api
  // usuarios, posts
  async requestData() {
    this.serviceSuscription = await this.ApiService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
    this.serviceSuscription = await this.ApiService.getAllUsers().subscribe(
      (usuarios) => {
        usuarios.forEach((users: User) => {
          this.barChartLabels.push(users.name);
          const post = this.getCantidadPost(users.id);
          this.barChartData[0].data.push(post);
          this.barChartData[1].data.push(this.getRandomInt(1, 10));
        });
      }
    );
  }

  //obtiene la cantidad de post realizado por cada usuario
  getCantidadPost(user: number): number {
    let listPost = this.posts.filter((x) => x.userId == user);
    return listPost.length;
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
