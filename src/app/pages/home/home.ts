import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { Perfil } from './perfil/perfil';
import { Destaques } from "./destaques/destaques";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardImage, Perfil, Destaques],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
