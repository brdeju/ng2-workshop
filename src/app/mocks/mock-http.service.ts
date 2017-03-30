import { Injectable } from '@angular/core';
import { ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MovieModel } from '../models/movie.model';
import { CategoryModel } from '../models/category.model';
import { CategoryEnum } from '../enums/category.enum';

declare var require: any;
var movies = require('./movies.mock.json');

@Injectable()
export class MockHttpService {
  categories: CategoryModel[] = [
    {Name: 'Action', Id: 0},
    {Name: 'SciFi', Id: 4},
    {Name: 'Horror', Id: 3},
    {Name: 'Comedy', Id: 1},
    {Name: 'Thriller', Id: 2}
  ];
  movies: MovieModel[];
  lastId: number = 0;

  constructor() {
    this.movies = movies;
    this.movies.map(movie => {
      if (this.lastId < movie.Id) {
        this.lastId = movie.Id;
      }
    })
  }

  get(url: string, options?): Observable<any> {
    const routsSeg = url.split('/');
    const id = routsSeg.length > 1 ? routsSeg[1] : null;
    if(routsSeg[0] === 'movies') {
      return this.getMovies(id);
    } else {
      return this.getCategories();
    }
  }

  post(url: string, body: any, options?): Observable<any> {
    this.lastId++;
    const movie = body as MovieModel;
    movie.Id = this.lastId;
    movie.Category = this.getCategoryModelById(movie.Category.Id);
    this.movies.push(movie);
    return Observable.of(this.mockResponse(movie));
  }

  put(url: string, body: any, options?): Observable<any> {
    const routsSeg = url.split('/');
    const id = routsSeg.length > 1 ? routsSeg[1] : null;
    const uMovie = body as MovieModel;
    uMovie.Category = this.getCategoryModelById(uMovie.Category.Id);
    const idx = this.movies.map(movie => movie.Id === +id ? uMovie : movie);
    return Observable.of(this.mockResponse(uMovie));
  }
  
  delete(url: string, options?) {
    const routsSeg = url.split('/');
    const id = routsSeg.length > 1 ? routsSeg[1] : null;
    this.movies = this.movies.filter(movie => movie.Id !== +id);
    return Observable.of(this.mockResponse(this.movies));    
  }

  options(url: string, options?) {

  }

  private getCategoryModelById(categoryId) {
    const category = new CategoryModel();
    category.Id = +categoryId;
    category.Name = CategoryEnum[categoryId];
    return category;
  }

  private getCategories() {
    return Observable.of(this.mockResponse(this.categories));
  }

  private getMovies(movieId?) {
    if(movieId) {
      return Observable.of(this.mockResponse(this.movies.find(movie => movie.Id === +movieId)));
    }
    return Observable.of(this.mockResponse(this.movies));
  }

  private mockResponse(data) {
    return {
      json() {
        return data;
      }
    }
  }
}
