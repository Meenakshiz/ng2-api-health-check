import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-nav></app-nav>
            <app-home></app-home>
            <app-api-directory></app-api-directory>
            <app-add-api></app-add-api>`,
})
export class AppComponent  { name = 'Angular'; }
