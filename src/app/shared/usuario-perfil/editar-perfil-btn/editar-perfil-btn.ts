import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Users } from '../../../models/users';
import { MatDialog } from '@angular/material/dialog';
import { EditarPerfilForm } from './editar-perfil-form/editar-perfil-form';

@Component({
  selector: 'app-editar-perfil-btn',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './editar-perfil-btn.html',
  styleUrl: './editar-perfil-btn.scss',
})
export class EditarPerfilBtn {
  constructor(private dialog : MatDialog){}
  

  usuario = input<Users>()

  abrirEditarProjeto(){
    const dialog = this.dialog.open(EditarPerfilForm,{
      autoFocus: "true",
      data: this.usuario()
    })
  }

}
