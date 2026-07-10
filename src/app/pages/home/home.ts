import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Destaques } from "./destaques/destaques";
import { Banner } from "../../shared/banner/banner";
import { Projeto } from "../../shared/projeto/projeto";
import { ProjetosService } from '../../services/projetos-service';
import { MatCardModule } from '@angular/material/card';
import { UsuarioPerfil } from "../../shared/usuario-perfil/usuario-perfil";

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, Destaques, Banner, Projeto, MatCardModule, UsuarioPerfil],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private projetoService = inject(ProjetosService)

  projetos = this.projetoService.projetos;
}
