import {Component} from '@angular/core';
import {Book} from '../../concreate/book';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector:'booki',
	templateUrl:'./book.component.html',
	styleUrls:['./book.component.css']
})
export class BookComponent{
		bookName;
		kitap = new Book(1,"Cehnnem","http://altyazi.org/haberler/Dan-Brown-Cehennem-Inferno-Kitap-Kapak-Orjinal.jpg");
			constructor(
			private route: ActivatedRoute,
			private router: Router,

			) {}

			ngOnInit() {
					 this.route.params.subscribe(key=>this.bookName = key["bookName"]);
			}
}

