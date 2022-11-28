import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    <button type="button" (click)="onClickMe()">Paina nappia</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = 'Tama teksti muuttuu!';

  onClickMe() {
    this.clickMessage = 'Hei nappi toimii!';
  }
}