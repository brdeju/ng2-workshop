import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { MovieModel } from '../models/movie.model';
import { CategoryEnum } from '../enums/category.enum';
import { CategoryModel } from '../models/category.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  movie: MovieModel;
  categories: CategoryModel[];
  submitted = false;
  isEditMode: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService) { }

  ngOnInit() {
    this.service.getCategories()
      .subscribe(categories => this.categories = categories);
    this.route.params
      .switchMap((params: Params) => {
        this.isEditMode = !!params['id'];
        return this.service.getMovie(params['id'])
      })
      .subscribe((movie: MovieModel) => {
        if(!movie) {
          movie = new MovieModel();
          movie.Category = new CategoryModel();
        }
        this.movie = movie;
      });
  }

  onSubmit() { 
    this.submitted = true; 
    this.service.saveMovie(this.movie)
      .subscribe(movie => {
        this.movie = movie;
        this.router.navigate(['list']);
      });
  }

}
