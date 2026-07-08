import { Component, signal } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import {MatTabsModule} from '@angular/material/tabs';
import { Projeto } from "../../shared/projeto/projeto";
import { Perfil } from "../../shared/perfil/perfil";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-dashboard',
  imports: [Banner, MatTabsModule, Projeto, Perfil, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
}
