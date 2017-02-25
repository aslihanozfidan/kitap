import {NgModule} from '@angular/core';
		//Angular modules
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

		//Our Modules
import {BookModule} from './book/book.module';
import {UserModule} from './user/user.module';
		//Components
import {IndexComponent} from './index';	
import {AuthorComponent} from './author';

import {CategoriesComponent} from './categories';


@NgModule({
	imports:[BrowserModule,BookModule,UserModule
],
	declarations:[
			IndexComponent,
			AuthorComponent,
		
			CategoriesComponent,
			],

	})
export class CompModule{

}

