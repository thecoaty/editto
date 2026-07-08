import { Component, signal } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import {MatTabsModule} from '@angular/material/tabs';
import { Projeto } from "../../shared/projeto/projeto";
import { Perfil } from "../home/perfil/perfil";
import { MatButtonModule } from '@angular/material/button';
import { UserDashboard } from "./user-dashboard/user-dashboard";


@Component({
  selector: 'app-dashboard',
  imports: [Banner, MatTabsModule, Projeto, MatButtonModule, UserDashboard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
}
