import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardImage } from "@angular/material/card";

@Component({
  selector: 'app-destaques',
  imports: [MatCard, MatCardHeader],
  templateUrl: './destaques.html',
  styleUrl: './destaques.scss',
})
export class Destaques {
  images =[
    {url:'https://i.ytimg.com/an_webp/T1HlX9R8n4s/mqdefault_6s.webp?du=3000&sqp=COHEr9IG&rs=AOn4CLA1nedOAS5WevegranCPNnb9SObaA', alt:'img 1'},
    {url:'https://i.ytimg.com/an_webp/MPRzk2vxmvU/mqdefault_6s.webp?du=3000&sqp=CLWnr9IG&rs=AOn4CLBjxCEfPsdPMrwGLAYD3egFQnAdzQ', alt:'img 1'},
    {url:'https://i.ytimg.com/an_webp/0EmL10-HFMk/mqdefault_6s.webp?du=3000&sqp=COq-r9IG&rs=AOn4CLCP4HWVNjyYJu1vmN5eUle-GJ3KRQ', alt:'img 1'},
    {url:'https://i.ytimg.com/an_webp/mILqjpycOzw/mqdefault_6s.webp?du=3000&sqp=CNSzr9IG&rs=AOn4CLDn2w7d_w5AxCqxkptIeMeyjQEdjw', alt:'img 1'}
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
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  startAutoPlay(){
    this.intervalId = setInterval (() => this.next(), 4000)
  }
}
