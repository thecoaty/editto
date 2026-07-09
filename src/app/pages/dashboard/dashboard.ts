import { Component, input, signal } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import {MatTabsModule} from '@angular/material/tabs';
import { Projeto } from "../../shared/projeto/projeto";
import { MatButtonModule } from '@angular/material/button';
import { UserDashboard } from "./user-dashboard/user-dashboard";
import { AddProjetosBtn } from './add-projetos-btn/add-projetos-btn';
import { MatDialog } from '@angular/material/dialog';
import { ProjetosService } from '../../services/projetos-service';


@Component({
  selector: 'app-dashboard',
  imports: [Banner, MatTabsModule, Projeto, MatButtonModule, UserDashboard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  user  = ''


  constructor(private dialog : MatDialog){}

  abrirPaginaProjeto(){
    const dialog = this.dialog.open(AddProjetosBtn,{
      autoFocus: "true",
      data: this.user
    })
  }

  receberUser(dadoUser : string){
    this.user = dadoUser;
  }
}
