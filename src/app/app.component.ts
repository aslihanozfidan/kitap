/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './bootstrap.min.css',
    './app.component.css'
    
  ],
  template: `

    <headerc>

    </headerc>

    <router-outlet></router-outlet>
 
    <footerc>

    </footerc>
  

   
  `
})
export class AppComponent {
 
  name = 'Kitap Okuru';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
