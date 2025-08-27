import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <div class="flex gap-3">
      <button routerLink="/home" class="btn btn-outline">home</button>
      <button routerLink="/demo" class="btn btn-ghost">demo</button>
    </div>
  `,
  styles: ``
})
export class Navbar {

}
