import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjetosService } from '../../../services/projetos-service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from './confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-delete-projeto-btn',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './delete-projeto-btn.html',
  styleUrl: './delete-projeto-btn.scss',
})
export class DeleteProjetoBtn {

  constructor(private projetosService: ProjetosService, private dialog: MatDialog) { }

  projetoId = input<string | number>()

  openDeleteDialog() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deletarProjeto();
      }
    });
  }


  deletarProjeto() {
    this.projetosService.deletar(this.projetoId() as number)
  }


}
