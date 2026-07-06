import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-lateral',
  imports: [MatIconModule, MatButtonModule, MatSidenavModule, MatSidenav, MatSidenavContainer, MatNavList, MatSidenavContent, MatToolbar],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.scss',
})
export class MenuLateral {

}
