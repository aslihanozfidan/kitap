import {Injectable} from '@angular/core';
import {Comment} from '../../concreate/comment';
@Injectable()
export class CommentService{
	private comments : Comment[];

	getComments():Promise<Comment[]>{
		return Promise.resolve(COMMENT);
	}	

}
