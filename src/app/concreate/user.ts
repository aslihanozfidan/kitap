export class User{
	private user_id:number;
	private user_email:string;
	private user_name:string;
	private user_img:string;
		constructor(user_id:number,user_name:string){
			this.user_id = user_id;
			this.user_name = user_name;
		}

}