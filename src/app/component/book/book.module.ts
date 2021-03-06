import {NgModule} from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { ROUTES } from './book.routes';
		//Components

import {BookComponent} from './';
import {BookCommentComponent} from './bookcomment';
import {BookInformationComponent} from './bookinformation';
import {ShareModule} from '../share/share.module';
import {BookLikeComponent} from '../book/booklike';


@NgModule({
	imports:[BrowserModule, RouterModule.forChild(ROUTES),ShareModule
],
	declarations:[
			BookComponent,
			BookCommentComponent,
			BookInformationComponent,
			BookLikeComponent
	]
	,
	exports:[ShareModule]

	})
export class BookModule{

}

