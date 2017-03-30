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
  movies = [{
    "Id": 0,
    "Title": "hac",
    "Description": "Sed ante.",
    "Category": {"Name": "SciFi", "Id": 4}
  }, {
    "Id": 1,
    "Title": "mauris ullamcorper purus",
    "Description": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    "Category": {"Name":"Action", "Id": 0}
  }];
  
  constructor(private service: ApiService) { }

  ngOnInit() {    
  }
}
