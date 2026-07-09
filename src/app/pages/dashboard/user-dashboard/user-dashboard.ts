import { Component, output, signal } from '@angular/core';
import { DashboardService } from '../../../services/dashboard-service';
import { Auth } from '../../../services/auth';
import { Users } from '../../../models/users';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-dashboard',
  imports: [MatTabsModule, MatButtonModule, MatCardModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss',
})
export class UserDashboard {
  constructor(private dashService: DashboardService, private auth: Auth){}

  perfil = signal<Users | null>(null);

  perfilUser = output<string>()

  ngOnInit(){
    this.dashService.getPerfilInfos().subscribe({
      next:(dados) => {
        if(dados){
          this.perfil.set(dados)
          this.perfilUser.emit(dados.usuario)
        };
      },
      error : (err) => this.auth.logout()
    })
    
  }
}
