import { Component, computed, inject, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { UsuarioService } from '../../services/usuario-service';
import { Users } from '../../models/users';
import { DashboardService } from '../../services/dashboard-service';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { EditarPerfilBtn } from "./editar-perfil-btn/editar-perfil-btn";

@Component({
  selector: 'app-usuario-perfil',
  imports: [MatTabsModule, MatButtonModule, MatCardModule, EditarPerfilBtn],
  templateUrl: './usuario-perfil.html',
  styleUrl: './usuario-perfil.scss',
})
export class UsuarioPerfil {

  constructor(private dashService: DashboardService) { }

  perfil = signal<Users | null>(null);

  perfilUser = output<string>()

  private router = inject(Router);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects),
      startWith(this.router.url)
    )
  );
  isHome = computed(() => this.currentUrl() === '/home');
  isDashboard = computed(() => this.currentUrl() === '/dashboard');

  ngOnInit() {
    if(this.isDashboard()){
      this.dashService.getPerfilInfos().subscribe({
      next: (dados) => {
        if (dados) {
          this.perfil.set(dados)
          this.perfilUser.emit(dados.usuario)
        };
      }
    })
    }

  }


  userService = inject(UsuarioService)

  usuarioInfo = this.userService.usuarios;


}
