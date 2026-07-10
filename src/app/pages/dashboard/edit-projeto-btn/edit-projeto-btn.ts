import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjetosService } from '../../../services/projetos-service';
import { MatDialog } from '@angular/material/dialog';
import { AddProjetosBtn } from '../add-projetos-btn/add-projetos-btn';
import { IProjetos } from '../../../models/iprojetos';
import { EditProjetoForm } from './edit-projeto-form/edit-projeto-form';

@Component({
  selector: 'app-edit-projeto-btn',
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './edit-projeto-btn.html',
  styleUrl: './edit-projeto-btn.scss',
})
export class EditProjetoBtn {

  constructor(private dialog : MatDialog){}

  projeto = input<IProjetos>()

  abrirEditarProjeto(){
    const dialog = this.dialog.open(EditProjetoForm,{
      autoFocus: "true",
      data: this.projeto()
    })
  }

}
