import { Component, signal } from '@angular/core';
import { Banner } from "../../shared/banner/banner";
import { DashboardService } from '../../services/dashboard-service';
import { Users } from '../../models/users';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [Banner],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
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
