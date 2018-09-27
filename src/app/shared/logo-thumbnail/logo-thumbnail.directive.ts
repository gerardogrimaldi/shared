import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[logoThumbnail]',
})
export class LogoThumbnailDirective implements OnInit {
  @Input('logoThumbnail') videoThumbnail;
  element;

  constructor(el: ElementRef) {
    this.element = el;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundImage = `
    url(` + this.videoThumbnail + `)
    `;
    this.element.nativeElement.style.backgroundSize = 'cover';
    this.element.nativeElement.style.height = '70px';
    this.element.nativeElement.style.width =  '110px';
    this.element.nativeElement.style.borderRadius = '5px';
  }

}
