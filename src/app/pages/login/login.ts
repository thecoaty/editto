import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router, private auth:Auth){}

  loginData ={
    usuario: '',
    senha: ''
  }



  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  mensagemErro : string | null = null;

  onSubmit(){
    console.log(this.loginData)
    this.auth.login(this.loginData).subscribe({
      next:(response)=>{
        this.router.navigate(["/home"])
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
