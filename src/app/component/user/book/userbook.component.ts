import {Component} from '@angular/core';
@Component({
    selector:'user-book',
    template:`./userbook.component.html`,
    styleUrls:[`./userbook.component.css`]
})
export class UserBookComponent{
    name ="Johhn Bravo";
    userName = "johhnn";
    readBooks = 32;
    likedBooks = 440;
    time = "28.12.2016 14:00";
}