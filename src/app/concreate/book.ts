import {Author} from './author';
export class Book{
	private _authors:Author[];
	private _book_id:number;
	private _book_name:string;
	private _book_img:string;
	private _book_information:string;
	private _rank:number;
 	
	constructor(book_id:number,book_name:string,book_image) {
      	  this._book_id = book_id;
		  this._book_name = book_name;
		  this._book_img = book_image;		  
    }

	set book_img(book_img:string){
		this._book_img = book_img;
	}	
    get book_img():string{
		return this._book_img;
	}
	set authors(authors:Author[]){
		this._authors = authors;
	}
	set book_information(book_information:string){
		this._book_information = book_information;
	}
}