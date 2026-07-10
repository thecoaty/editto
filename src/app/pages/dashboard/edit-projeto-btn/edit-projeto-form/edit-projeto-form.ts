import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { ProjetosService } from '../../../../services/projetos-service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef, MatDialogContent, MatDialogClose, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-projeto-form',
  imports: [MatCheckboxModule, MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule, MatDialogContent, MatDialogClose, MatDialogTitle],
  templateUrl: './edit-projeto-form.html',
  styleUrl: './edit-projeto-form.scss',
})
export class EditProjetoForm {

    constructor(private projetosService: ProjetosService, private dialogRef: MatDialogRef<EditProjetoForm>){}

      public dadosRecebidos = inject(MAT_DIALOG_DATA);

  projetoData = {
    id: this.dadosRecebidos.id,
    usuario : this.dadosRecebidos.usuario, 
    titulo: this.dadosRecebidos.titulo,
    categoria: this.dadosRecebidos.categoria, 
    urlLink: this.dadosRecebidos.urlLink, 
    urlImg: this.dadosRecebidos.urlImg, 
    exibir: this.dadosRecebidos.exibir,
    destaque: this.dadosRecebidos.destaque,
  }


  atualizarProjeto(form : NgForm){
    if(form.valid){
      this.projetosService.editarProjeto(this.projetoData.id, this.projetoData)
      this.dialogRef.close()
    }
  }
}
