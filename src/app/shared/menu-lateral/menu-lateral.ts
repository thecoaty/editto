import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  imports: [MatIconModule, MatButtonModule, MatSidenavModule, MatSidenav, MatSidenavContainer, MatNavList, MatSidenavContent, MatToolbar],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.scss',
})
export class MenuLateral {
  constructor(private auth: Auth, private router: Router){}

  logged(): Boolean{
    return this.auth.isLogged()
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['/home'])
  }
}
