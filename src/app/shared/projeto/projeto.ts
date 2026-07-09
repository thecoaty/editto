import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { IProjetos } from '../../models/iprojetos';

@Component({
  selector: 'app-projeto',
  imports: [MatButtonModule, MatCardModule, NgIf],
  templateUrl: './projeto.html',
  styleUrl: './projeto.scss',
})
export class Projeto {
  constructor(private ativatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isDashboard();
  }


  isDashboard(): boolean {
    const snapshot = this.ativatedRoute.snapshot
    const urlString = snapshot.url.map(segment => segment.path).join('/');
    if (urlString === "dashboard") {
      return true
    }
    return false
  }
}
