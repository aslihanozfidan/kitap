import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector:'authori',
	templateUrl:'./author.component.html',
	styleUrls:['./author.component.css']
})
export class AuthorComponent{
	authorName;
			constructor(
			private route: ActivatedRoute,
			private router: Router,

			) {}

			ngOnInit() {
					 this.route.params.subscribe(key=>this.authorName = key["authorName"]);
			}
}

