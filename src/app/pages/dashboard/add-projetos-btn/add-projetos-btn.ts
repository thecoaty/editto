import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjetosService } from '../../../services/projetos-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { IProjetos } from '../../../models/iprojetos';
import { MatDialogModule, MatDialogRef, MatDialogContent, MatDialogClose, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-add-projetos-btn',
  imports: [MatCheckboxModule, MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule, MatDialogContent, MatDialogClose, MatDialogTitle],
  templateUrl: './add-projetos-btn.html',
  styleUrl: './add-projetos-btn.scss',
})
export class AddProjetosBtn {


  constructor(private projetosService: ProjetosService, private dialogRef: MatDialogRef<AddProjetosBtn>) { }

  public dataRecebida = inject<{ usuario: any, projeto?: any }>(MAT_DIALOG_DATA);

  isEditMode = false;
  projetoData: any;


  ngOnInit() {
    this.isEditMode = !!this.dataRecebida?.projeto;

    if (this.isEditMode) {
      this.projetoData = { ...this.dataRecebida.projeto };
    } else {
      this.projetoData = {
        id: 0,
        usuario: this.dataRecebida?.usuario,
        titulo: "",
        categoria: "",
        urlLink: "",
        urlImg: "",
        exibir: true,
        destaque: false,
      };
    }
  }

  salvarProjeto(form: NgForm) {
    if (form.valid) {
      if (this.isEditMode) {
        this.editarProjeto();
      }
      else {
        this.adicionarProjeto()
      }
    }
  }

  adicionarProjeto() {
    this.projetoData.id = Date.now()
    this.projetosService.adicionarProjeto(this.projetoData)
    this.dialogRef.close(this.projetoData);
  }

  editarProjeto() {
    this.projetosService.editarProjeto(this.projetoData.id, this.projetoData)
    this.dialogRef.close()
  }



}
