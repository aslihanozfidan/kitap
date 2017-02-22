import {Component} from '@angular/core';
import {Book} from '../../../concreate/book';
import {Author} from '../../../concreate/author';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector:'bookinformationi',
	templateUrl:'./bookinformation.component.html',
	styleUrls:['./bookinformation.component.css']
})
export class BookInformationComponent{
			book;
        	kitap = new Book(1,"Cehnnem","http://altyazi.org/haberler/Dan-Brown-Cehennem-Inferno-Kitap-Kapak-Orjinal.jpg");
			constructor(
			private route: ActivatedRoute,
			private router: Router,
			
			) {}

			ngOnInit() {
					
					 this.route.params.subscribe(key=>this.book = key["book"]);
					 this.kitap.authors=[new Author(1,'Yaşar Kemal'),new Author(1,'Yaşar Kemal'),new Author(1,'Yaşar Kemal'),new Author(1,'Yaşar Kemal'),new Author(1,'Yaşar Kemal'),new Author(6,'Mahmut Kemal')];
					this.kitap.book_information='Kitap Bilgisi'; 	
					}
}