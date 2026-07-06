import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateral } from "./shared/menu-lateral/menu-lateral";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateral, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('editto');
}
