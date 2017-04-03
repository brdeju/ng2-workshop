import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrls: ['./element-details.component.scss']
})
export class ElementDetailsComponent implements OnInit {

private movie: MovieModel;
 
  constructor(private apiService : ApiService, private  actRoot :ActivatedRoute) { }

  ngOnInit() {

    this.actRoot.params.subscribe
    (params =>
     this.apiService.getMovieById(params.id).
     subscribe(movie => { this.movie = movie; console.log(movie); console.log(this.movie);}) 
     );
  }

}
