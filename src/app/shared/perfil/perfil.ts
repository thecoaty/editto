import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { DashboardService } from '../../services/dashboard-service';
import { Auth } from '../../services/auth';
import { Users } from '../../models/users';

@Component({
  selector: 'app-perfil',
  imports: [MatCard, MatCardContent],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  constructor(private dashService: DashboardService, private auth: Auth){}

  perfil = signal<Users | null>(null);

  ngOnInit(){
    this.dashService.getPerfilInfos().subscribe({
      next:(dados) => {
        if(dados) this.perfil.set(dados);
      },
      error : (err) => this.auth.logout()
    })
  }
}
