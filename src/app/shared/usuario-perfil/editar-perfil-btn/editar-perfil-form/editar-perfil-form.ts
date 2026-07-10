import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../../../services/usuario-service';

@Component({
  selector: 'app-editar-perfil-form',
  imports: [MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule, MatDialogContent, MatDialogClose, MatDialogTitle],
  templateUrl: './editar-perfil-form.html',
  styleUrl: './editar-perfil-form.scss',
})
export class EditarPerfilForm {

    constructor(private dialogRef: MatDialogRef<EditarPerfilForm>, private usuarioService: UsuarioService) { }

    public dataRecebida = inject(MAT_DIALOG_DATA);

    perfilForm ={
      id: this.dataRecebida.id,
      nome: this.dataRecebida.nome,
      descricao: this.dataRecebida.descricao,
      img: this.dataRecebida.img,
      senha: this.dataRecebida.senha,
      usuario: this.dataRecebida.usuario
    }

    atualizarPerfil(form: NgForm){
      if(form.valid){
        this.usuarioService.editarPerfil(this.perfilForm);
        this.dialogRef.close()
      }
    }

}
