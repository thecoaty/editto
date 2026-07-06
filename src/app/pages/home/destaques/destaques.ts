import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatCard, MatCardHeader, MatCardImage } from "@angular/material/card";

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
  images =[
    {url:'https://img.youtube.com/vi/tjtCJD5Q5Nk/maxresdefault.jpg', alt:'img 1'},
    {url:'https://img.youtube.com/vi/9Ru18RCJNys/maxresdefault.jpg', alt:'img 2'},
    {url:'https://img.youtube.com/vi/qaIm5HMQFaM/maxresdefault.jpg', alt:'img 3'},
    {url:'https://img.youtube.com/vi/0EmL10-HFMk/maxresdefault.jpg', alt:'img 3'},
    
  ]

  currentIndex = 0;
  intervalId:any;
  itemsPerView = 2;

  ngOnInit(){
    this.startAutoPlay()
  }
  get visibleImages() {
    return this.images.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }
  
  next(){
    if (this.currentIndex < this.images.length - this.itemsPerView) {
      this.currentIndex += 2;
    } else {
      this.currentIndex = 0;
    }
  }

  startAutoPlay(){
    this.intervalId = setInterval (() => this.next(), 4000)
  }
}
