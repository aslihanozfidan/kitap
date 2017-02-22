import { Routes, RouterModule } from '@angular/router';

import {BookCommentComponent} from './bookcomment'
import {BookInformationComponent} from './bookinformation'
import {BookComponent} from './';
export const ROUTES: Routes = [
    { path: 'kitap/:bookName', component: BookComponent, children:[
         {path: 'yorumlar',component:BookCommentComponent},
         {path: 'bilgiler', component:BookInformationComponent}
    ] },
  
  

];
