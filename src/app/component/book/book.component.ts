import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector:'booki',
	templateUrl:'./book.component.html',
	styleUrls:['./book.component.css']
})
export class BookComponent{
		bookName;

			constructor(
			private route: ActivatedRoute,
			private router: Router,

			) {}

			ngOnInit() {
					 this.route.params.subscribe(key=>this.bookName = key["bookName"]);
			}
}

