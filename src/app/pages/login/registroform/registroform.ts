import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registroform',
  imports: [MatInputModule, FormsModule, MatFormFieldModule, MatButtonModule, MatDialogContent, MatDialogClose, MatDialogTitle, MatCheckboxModule],
  templateUrl: './registroform.html',
  styleUrl: './registroform.scss',
})
export class Registroform {

    constructor(private snackBar : MatSnackBar, private dialogRef: MatDialogRef<Registroform>){}


  registroForm={
    usuario : '',
    email : '',
    senha : '',
    lgpd : false
  }

  cadastro(){
    this.snackBar.open('Em breve!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

}
