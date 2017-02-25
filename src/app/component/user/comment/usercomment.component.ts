import {Component} from '@angular/core';
@Component({
    selector:'user-comment',
    template:`./usercomment.component.html`,
    styleUrls:[`./usercomment.component.css`]
})
export class UserCommentComponent{
    name ="Johhn Bravo";
    userName = "johhnn";
    readBooks = 32;
    likedBooks = 440;
    time = "28.12.2016 14:00";
}