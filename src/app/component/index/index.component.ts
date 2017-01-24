import {Component,OnInit} from '@angular/core';
import {Book} from '../../concreate/book';
import {BookService} from '../../services/book';
@Component({
	selector:'indexli',
	templateUrl:'./index.component.html',
	styleUrls:['./index.component.css']
})
export class IndexComponent implements OnInit{
   
     lastBooks:Book[];

	 constructor(private bookService:BookService){
		
	 }

	 ngOnInit(){
			  this.bookService.getBooks().then((books)=>this.lastBooks=books);
	 }

}

