import {Injectable} from '@angular/core';
import {Category} from '../../concreate/category';
import {CATEGORIES} from './category';
@Injectable()
export class CategoryService{

	private categories:Category[];
	 
	getBooks():Promise<Category[]>{
		return Promise.resolve(CATEGORIES);
	}	
}
