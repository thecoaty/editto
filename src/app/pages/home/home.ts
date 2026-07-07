import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardImage } from '@angular/material/card';
import { Perfil } from './perfil/perfil';
import { Destaques } from "./destaques/destaques";
import { Banner } from "../../shared/banner/banner";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardImage, Perfil, Destaques, Banner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
