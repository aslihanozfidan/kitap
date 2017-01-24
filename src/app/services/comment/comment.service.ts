import {Injectable} from '@angular/core';
import {Comment} from '../../concreate/comment';
@Injectable()
export class CommentService{
	private comments : Comment[];

	public getComments():Comment[]{
		return this.comments;
	}

}
