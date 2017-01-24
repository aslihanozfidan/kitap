import { Routes, RouterModule } from '@angular/router';

import { DataResolver } from './app.resolver';
import {IndexComponent} from './component/index';
import {UserComponent} from './component/user';
import {BookComponent} from './component/book';
import {AuthorComponent} from './component/author';
export const ROUTES: Routes = [
  { path: '',      component: IndexComponent },
  { path: 'uye/:userName', component: UserComponent},
  { path: 'kitap/:bookName', component: BookComponent },
  { path: 'yazar/:authorName', component: AuthorComponent}
];
