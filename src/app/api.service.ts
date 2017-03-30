import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MovieModel } from './models/movie.model';
import { CategoryModel } from './models/category.model';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

}
