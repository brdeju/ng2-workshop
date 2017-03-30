import { CategoryModel } from './category.model';

export class MovieModel {
    Id: number;
    Title: string;
    Description: string;
    Category: CategoryModel;
}
