export class User{
	private user_id:number;
	private like_id:string[];
		constructor(user_id:number,like_id:number){
			this.user_id = user_id;
			this.like_id = this.likes;
		}
		set likes(like_id:string[]){
		this.like_id = this.likes;
	}

}