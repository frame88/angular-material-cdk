import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col gap-3 p-10">
      <button routerLink="/home" class="text-6xl">home</button>
      <button routerLink="/demo" class="text-6xl">demo</button>
    </div>
  `,
  styles: ``
})
export class Navbar {

}
