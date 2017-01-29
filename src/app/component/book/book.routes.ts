import { Routes, RouterModule } from '@angular/router';

import {BookCommentComponent} from './bookcomment'
import {BookComponent} from './';
export const ROUTES: Routes = [
    { path: 'kitap/:bookName', component: BookComponent, children:[
         { path: 'yorum',component:BookCommentComponent}
    ] },
  
  

];
