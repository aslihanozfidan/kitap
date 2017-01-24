import {Book} from './book';
export class Author{
	private author_id:number;
	private author_name:string;
	private books:Book;
		constructor (author_id:number,author_name:string){
			this.author_id=author_id;
			this.author_name=author_name;
		}
}