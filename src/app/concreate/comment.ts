import { Book } from './book';
import { User } from './user';
export class Comment {
	private comment_id: number;
	private user: User;
	private book: Book;
	private comment_time: String;
	private comment: string;
	constructor(comment_id: number, comment: string) {
		this.comment_id = comment_id;
		this.comment = comment;
	}
	set users(user: User) {
		this.users = user;
	}
	set comment_times(comment_time:string){
		this.comment_times = comment_time;
	}	
}