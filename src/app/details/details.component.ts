import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MovieModel } from '../models/movie.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: MovieModel;

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getMovie(params['id']))
      .subscribe((movie: MovieModel) => this.movie = movie);
  }

}
