import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjetosService } from '../../../services/projetos-service';
import { MatDialog } from '@angular/material/dialog';
import { AddProjetosBtn } from '../add-projetos-btn/add-projetos-btn';
import { IProjetos } from '../../../models/iprojetos';

@Component({
  selector: 'app-edit-projeto-btn',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './edit-projeto-btn.html',
  styleUrl: './edit-projeto-btn.scss',
})
export class EditProjetoBtn {

  constructor(private dialog : MatDialog){}

  projeto = input<IProjetos>()
  usuario = input<string>()

  abrirEditarProjeto(){
    const dialog = this.dialog.open(AddProjetosBtn,{
      autoFocus: "true",
      data: { usuario: this.usuario, projeto: this.projeto() }
    })
  }

}
