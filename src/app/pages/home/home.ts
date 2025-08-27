import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButton],
  template: `
    <button matButton="text">text</button>
    <button matButton="outlined">outlined</button>
    <button matButton="filled">filled</button>
    <button matButton="elevated">elevated</button>
    <button matButton="tonal">tonal</button>
  `,
  styles: ``
})
export default class Home {

}
