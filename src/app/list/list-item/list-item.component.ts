import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: '[list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(movieId) {
    this.delete.emit(movieId);
  }
}
