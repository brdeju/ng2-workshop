import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MovieModel } from './models/movie.model';
import { CategoryModel } from './models/category.model';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }


  saveMovie(movie: MovieModel): Observable<MovieModel> {
    let observer;
    if(movie.Id) {
      observer = this.http.put(`movies/${movie.Id}`, movie);
    } else {
      observer = this.http.post(`movies`, movie);
    }
    return observer
      .map(response => response.json());
  }

  getMovie(movieId: string): Observable<MovieModel> {
    return this.http.get(`movies/${movieId}`)
      .map(response => response.json())
  }

  getMovies(): Observable<MovieModel[]> {
    return this.http.get('movies')
      .map(response => response.json());
  }

  deleteMovie(movieId: number): Observable<MovieModel[]> {
    return this.http.delete(`movies/${movieId}`)
      .map(response => response.json());
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get('categories')
      .map(response => response.json());
  }
}
