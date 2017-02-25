import { Routes, RouterModule } from '@angular/router';

import {UserComponent} from './';
import {UserInfoComponent} from './info';
import {UserBookComponent} from './book';
import {UserCommentComponent} from './comment';
import {UserSettingsComponent} from './settings';
export const USER_ROUTES: Routes = [
    { path: 'uye/:userName', component: UserComponent, children:[
        { path: 'bilgilerim',component:UserInfoComponent},
        { path: 'kitaplarim',component:UserBookComponent},
        { path: 'yorumlarim',component:UserCommentComponent},
        { path: 'ayarlar',component:UserSettingsComponent}
    ] },

];
