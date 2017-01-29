import {Injectable} from '@angular/core';
import {COMMENTS} from './comment';
@Injectable()
export class CommentService{
	private comments : Comment[];

	getComments():Promise<Comment[]>{
		return Promise.resolve(COMMENTS);
	}	

}
