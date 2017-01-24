import {Injectable} from '@angular/core';
import {Book} from '../../concreate/book';
import {BOOKS} from './books';
@Injectable()
export class BookService{

	private books:Book[];
	 
	getBooks():Promise<Book[]>{
		return Promise.resolve(BOOKS);
	}	
}
