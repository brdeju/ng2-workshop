import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  @Input() movie: MovieModel;
  @Output() deletedId: EventEmitter<number>;

  constructor(private apiService: ApiService, private router: Router) 
  { 
    this.deletedId = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  Delete()
  {
    this.deletedId.emit(this.movie.Id);
  }

}
