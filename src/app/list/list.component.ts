import { Component, OnInit } from '@angular/core';

import { MovieModel } from '../models/movie.model';
import { CategoryEnum } from '../enums/category.enum';
import { CategoryModel } from '../models/category.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {  
  
  private _movies : MovieModel[];
  
  constructor(private apiService: ApiService ) { }

  ngOnInit() {

    this.apiService
    .getMovies()
    .subscribe(movies => this._movies = movies);
  }

  OnDelete(moveId : number)
  {
    this.apiService.deleteMovie(moveId).subscribe( movies => this._movies = movies);
  }
}
