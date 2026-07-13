import { Component, computed, inject, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatCard, MatCardHeader, MatCardImage } from "@angular/material/card";
import { ProjetosService } from '../../../services/projetos-service';
import { IProjetos } from '../../../models/iprojetos';

@Component({
  selector: 'app-destaques',
  imports: [MatCard, MatCardHeader],
  templateUrl: './destaques.html',
  styleUrl: './destaques.scss',
  animations:[
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class Destaques {

  private projetosService = inject(ProjetosService);

  destaques = this.projetosService.projetosDestacados


  currentIndex = signal<number>(0);
  
  itemsPerView = 2;
  private intervalId: any;

  visibleImages = computed(() => {
    const list = this.destaques();
    const index = this.currentIndex();
    return list.slice(index, index + this.itemsPerView);
  });

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  next() {
    const totalImages = this.destaques().length;
    const current = this.currentIndex();

    if (current < totalImages - this.itemsPerView) {
      this.currentIndex.set(current + 2);
    } else {
      this.currentIndex.set(0);
    }
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => this.next(), 4000);
  }

  updateImages(newImages: IProjetos[]) {
    this.destaques.set(newImages);
    this.currentIndex.set(0); 
  }
}
