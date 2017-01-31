import {NgModule} from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';


import {BookPanelComponent} from './bookpanel';
import {RankerComponent} from './bookpanel/ranker/ranker.component';

@NgModule({
	imports:[BrowserModule
],
	declarations:[
			BookPanelComponent,
			RankerComponent,
			],
	exports:[BookPanelComponent,RankerComponent]
	


	})
export class ShareModule{

}

