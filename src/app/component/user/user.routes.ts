import { Routes, RouterModule } from '@angular/router';


import {UserComponent} from './';
import {UserInfoComponent} from './info';
export const USER_ROUTES: Routes = [
    { path: 'uye/:userName', component: UserComponent, children:[
        { path: 'bilgilerim',component:UserInfoComponent}
    ] },

];
