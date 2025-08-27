import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/navbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MatSidenavModule, MatIcon, MatIconButton],
  template: `
    <mat-sidenav-container>
      //senza mode="side" la navbr sarebbe mostrata in overlay
      <mat-sidenav #sidenav mode="side" fixedInViewport class="!bg-red-400">
        <app-navbar />
      </mat-sidenav>
      
      <div>
        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon>list</mat-icon>
        </button>
        <router-outlet />
      </div>
    </mat-sidenav-container>  `,
  styles: [],
})
export class App {
  protected readonly title = signal('angular-material-cdk2');
}
