import {Injectable} from '@angular/core';
import {Author} from '../../concreate/author';
@Injectable()
export class AuthorService{
	private authors:Author[];
	public getAuthors():Author[]{
		return this.authors;
	}
	public getAuthor(id:number):Author{
		return null;
	}
	public findAuthorsWithName(name:string):Author{
		return null;
	}

}
