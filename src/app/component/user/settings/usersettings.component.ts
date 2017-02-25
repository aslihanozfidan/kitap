import {Component} from '@angular/core';
@Component({
    selector:'user-settings',
    template:`./usersettings.component.html`,
    styleUrls:[`./usersettings.component.css`]
})
export class UserSettingsComponent{
    name ="Johhn Bravo";
    userName = "johhnn";
    readBooks = 32;
    likedBooks = 440;
    time = "28.12.2016 14:00";
}