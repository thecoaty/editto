import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Perfil } from './perfil/perfil';
import { Destaques } from "./destaques/destaques";
import { Banner } from "../../shared/banner/banner";
import { Projeto } from "../../shared/projeto/projeto";
import { ProjetosService } from '../../services/projetos-service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, Perfil, Destaques, Banner, Projeto, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private projetoService = inject(ProjetosService)

  projetos = this.projetoService.projetos;
}
