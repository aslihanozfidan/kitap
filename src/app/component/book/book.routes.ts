import { Routes, RouterModule } from '@angular/router';

import { BookCommentComponent } from './bookcomment'
import { BookInformationComponent } from './bookinformation'
import { BookLikeComponent } from './booklike'
import { BookComponent } from './';
export const ROUTES: Routes = [
    {
        path: 'kitap/:bookName', component: BookComponent, children: [
            { path: 'yorumlar', component: BookCommentComponent },
            { path: 'bilgiler', component: BookInformationComponent },
            { path: 'begeniler', component: BookLikeComponent }
        ]
    },



];
