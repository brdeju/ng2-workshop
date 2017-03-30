import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';
import { MovieModel } from '../models/movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() movies: MovieModel[];
  @Output() filteredMovies = new EventEmitter<MovieModel[]>();
  searchValue: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.filteredMovies.emit(this.movies);
  }

  ngOnChanges(changes) {
    if(changes.movies && changes.movies.currentValue !== changes.movies.previousValue) {
      this.onSearch();
    }
  }

  onSearch() {
    this.filteredMovies.emit(this.searchService.search(this.movies, this.searchValue));
  }

}
