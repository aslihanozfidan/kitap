import {Component} from '@angular/core';
import {User} from '../../concreate/user';
import {Comment} from '../../concreate/comment';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
	selector:'bookcommenti',
	templateUrl:'./bookcomment.component.html',
	styleUrls:['./bookcomment.component.css']
})
export class BookCommentComponent{
		comment;
		yorum = new Comment(1,"Filminden daha güzel.");
			constructor(
			private route: ActivatedRoute,
			private router: Router,

			) {}

			ngOnInit() {
					 this.route.params.subscribe(key=>this.comment = key["comment"]);
			}
}