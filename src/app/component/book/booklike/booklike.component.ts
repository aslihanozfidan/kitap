import { Component } from '@angular/core';
import { Book } from '../../../concreate/book';
import { User } from '../../../concreate/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector: 'booklikei',
	templateUrl: './booklike.component.html',
	styleUrls: ['./booklike.component.css']
})
export class BookLikeComponent {
	user;       
	constructor(
		private route: ActivatedRoute,
		private router: Router,

	) { }

	ngOnInit() {
		this.route.params.subscribe(key => this.user = key["user"]);
        this.user = [new User(1,"Aslıhan"),new User(2,"Burak")];
	}
}