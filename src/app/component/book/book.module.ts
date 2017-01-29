import {NgModule} from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { ROUTES } from './book.routes';
		//Components

import {BookComponent} from './';
import {BookCommentComponent} from './bookcomment';
import {BookPanelComponent} from '../share/bookpanel';
import {RankerComponent} from '../share/bookpanel/ranker/ranker.component';

@NgModule({
	imports:[BrowserModule,    RouterModule.forChild(ROUTES)
],
	declarations:[
			BookPanelComponent,
			RankerComponent,
			BookComponent,
			BookCommentComponent
			],
			exports:[BookPanelComponent,RankerComponent]

	})
export class BookModule{

}

