import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjetosService } from '../../../services/projetos-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { IProjetos } from '../../../models/iprojetos';
import { MatDialogModule, MatDialogRef, MatDialogContent, MatDialogClose, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-add-projetos-btn',
  imports: [MatCheckboxModule, MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule, MatDialogContent, MatDialogClose, MatDialogTitle],
  templateUrl: './add-projetos-btn.html',
  styleUrl: './add-projetos-btn.scss',
})
export class AddProjetosBtn {

  constructor(private projetosService: ProjetosService, private dialogRef: MatDialogRef<AddProjetosBtn>){}

  public userRecebido = inject(MAT_DIALOG_DATA);


  projetoData = {
    id: 0,
    usuario : this.userRecebido, 
    titulo: "",
    categoria: "", 
    urlLink: "", 
    urlImg: "", 
    exibir: true,
    destaque: false,
  }

  adicionarProjeto(form : NgForm){
    if(form.valid){
      this.projetoData.id = Date.now()
      this.projetosService.adicionarProjeto(this.projetoData)
      this.dialogRef.close(this.projetoData);
    }
  }
}
