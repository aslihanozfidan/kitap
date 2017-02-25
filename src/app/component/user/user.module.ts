import {NgModule} from '@angular/core';

import { BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { USER_ROUTES } from './user.routes';
		//Components

import {UserComponent} from './';
import {UserInfoComponent} from './info';
import {UserCommentComponent} from './comment';
import {UserBookComponent} from './book';
import {UserSettingsComponent} from './settings';
import {ShareModule} from '../share/share.module';


@NgModule({
	imports:[BrowserModule, RouterModule.forChild(USER_ROUTES),ShareModule
],
	declarations:[
		UserComponent,
		UserInfoComponent,
		UserCommentComponent,
		UserBookComponent,		
		UserSettingsComponent
	]
	,
	exports:[ShareModule]
	})
export class UserModule{

}

