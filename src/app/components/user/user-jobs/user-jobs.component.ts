import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ijobs } from 'src/app/models/jobs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.scss'],
})
export class UserJobsComponent implements OnInit {
  listjobs: Partial<Ijobs>[];
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private ApiService: ApiService) {
    this.listjobs = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ApiService.getJobs(params.get('id')).subscribe((jobs) => {
        jobs.forEach((data: Ijobs) => {
          this.listjobs.push({
            title: data.title,
            completed: data.completed,
          });
        });
        this.loading = !this.loading;
      });
    });
  }
}
