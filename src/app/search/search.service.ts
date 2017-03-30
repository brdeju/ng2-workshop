import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Injectable()
export class SearchService {

  constructor() { }

  search(list: MovieModel[], value: string) {
    if(!value) {
      return list;
    }
    return list.filter(movie => movie.Title.indexOf(value) > -1 
      || movie.Description.indexOf(value) > -1
      || movie.Category.Name.indexOf(value) > -1);
  }
}
