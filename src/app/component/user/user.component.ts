import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector:'useri',
	templateUrl:'./user.component.html',
	styleUrls:['./user.component.css']
})
export class UserComponent{
	userName;
	defaultUserImg='assets/img/default-profil-img.png';
	bookNumber = 5;
			constructor(
			private route: ActivatedRoute,
			private router: Router,
	
			) {}

			ngOnInit() {
					 this.route.params.subscribe(key=>this.userName = key["userName"]);
			}
}

