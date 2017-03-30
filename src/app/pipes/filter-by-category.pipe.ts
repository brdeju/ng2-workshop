import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { CategoryEnum } from '../enums/category.enum';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(movies: MovieModel[], category: CategoryEnum): MovieModel[] {
    if(category) {
      return movies.filter(movie => movie.Category.Id === +category);
    }
    return movies;
  }

}
