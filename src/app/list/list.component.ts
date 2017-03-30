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
  movies: MovieModel[];
  categories: CategoryModel[];
  filteredMovies: MovieModel[];
  searchValue: string;
  filterByCategory: CategoryEnum = null;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.getCategories()
      .subscribe(categories => this.categories = categories);
    this.reloadMoview();
  }

  onDelete(movieId) {
    this.service.deleteMovie(movieId)
      .subscribe((movies: MovieModel[]) => {
        this.movies = [...movies];
      });
  }

  private reloadMoview() {
    this.service.getMovies()
      .subscribe((movies: MovieModel[]) => {
        this.movies = movies;
      });
  }
}
