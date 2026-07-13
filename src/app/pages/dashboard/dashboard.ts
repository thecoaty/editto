import { Component, inject, input, signal } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import {MatTabsModule} from '@angular/material/tabs';
import { Projeto } from "../../shared/projeto/projeto";
import { MatButtonModule } from '@angular/material/button';
import { AddProjetosBtn } from './add-projetos-btn/add-projetos-btn';
import { MatDialog } from '@angular/material/dialog';
import { ProjetosService } from '../../services/projetos-service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DeleteProjetoBtn } from "./delete-projeto-btn/delete-projeto-btn";
import { EditProjetoBtn } from "./edit-projeto-btn/edit-projeto-btn";
import { UsuarioPerfil } from "../../shared/usuario-perfil/usuario-perfil";


@Component({
  selector: 'app-dashboard',
  imports: [Banner, MatTabsModule, Projeto, MatButtonModule, MatCardModule, MatIconModule, DeleteProjetoBtn, EditProjetoBtn, UsuarioPerfil],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  user  = ''


  constructor(private dialog : MatDialog){}

  private projetoService = inject(ProjetosService)

  projetos = this.projetoService.projetos;

  abrirPaginaProjeto(){
    const dialog = this.dialog.open(AddProjetosBtn,{
      autoFocus: "true",
      data: { usuario: this.user, projeto: null }
    })
  }

  receberUser(dadoUser : string){
    this.user = dadoUser;
  }
}
