import {NgModule} from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import {BookModule} from './book/book.module';

		//Components
import {IndexComponent} from './index';	
import {AuthorComponent} from './author';
import {BookComponent} from './book';
import {BookCommentComponent} from './book/bookcomment';
import {UserComponent} from './user';
import {CategoriesComponent} from './categories';

@NgModule({
	imports:[BrowserModule,BookModule
],
	declarations:[
			IndexComponent,
			AuthorComponent,
			UserComponent,
			CategoriesComponent,
	
			]

	})
export class CompModule{

}

