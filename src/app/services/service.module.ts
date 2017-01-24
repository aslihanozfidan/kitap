import {NgModule} from '@angular/core';
import {BookService} from './book';
import {UserService} from './user';
import {CommentService} from './comment';
import {AuthorService} from './author';
@NgModule({
		providers:[BookService,UserService,CommentService,AuthorService]
	})
export class ServiceModule{

}

