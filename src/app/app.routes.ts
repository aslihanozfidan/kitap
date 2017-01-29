import { Routes, RouterModule } from '@angular/router';

import { DataResolver } from './app.resolver';
import {IndexComponent} from './component/index';
import {UserComponent} from './component/user';

import {AuthorComponent} from './component/author';
import {CategoriesComponent} from './component/categories';
export const ROUTES: Routes = [
  { path: '',      component: IndexComponent },
  { path: 'uye/:userName', component: UserComponent},
  { path: 'yazar/:authorName', component: AuthorComponent},
  { path: 'kategoriler', component: CategoriesComponent}
];
