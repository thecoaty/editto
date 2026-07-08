import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Perfil } from './perfil/perfil';
import { Destaques } from "./destaques/destaques";
import { Banner } from "../../shared/banner/banner";
import { Projeto } from "../../shared/projeto/projeto";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, Perfil, Destaques, Banner, Projeto],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
