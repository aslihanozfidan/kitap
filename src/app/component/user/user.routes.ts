import { Routes, RouterModule } from '@angular/router';


import {UserComponent} from './';
export const USER_ROUTES: Routes = [
    { path: 'uye/:userName', component: UserComponent, children:[
        //  { path: 'yorum',component:BookCommentComponent}
    ] },

];
