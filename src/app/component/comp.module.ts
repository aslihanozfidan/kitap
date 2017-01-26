import {NgModule} from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';

		//Components
import {IndexComponent} from './index';	
import {AuthorComponent} from './author';
import {BookComponent} from './book';
import {UserComponent} from './user';
import {CategoriesComponent} from './categories';
		//Share Components
import {BookPanelComponent} from './share/bookpanel';
import {RankerComponent} from './share/bookpanel/ranker/ranker.component';
@NgModule({
	imports:[BrowserModule],
	declarations:[
			IndexComponent,
			AuthorComponent,
			BookComponent,
			UserComponent,
			CategoriesComponent,
			BookPanelComponent,
			RankerComponent
			]

	})
export class CompModule{

}

