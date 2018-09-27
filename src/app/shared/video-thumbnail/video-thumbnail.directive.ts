import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[videoThumbnail]',
})
export class VideoThumbnailDirective implements OnInit {
  @Input('videoThumbnail') videoThumbnail;
  element;

  constructor(el: ElementRef) {
    this.element = el;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundImage = `
    url(http://cdnapisec.kaltura.com/p/1164832/thumbnail/entry_id/` + this.videoThumbnail + `/width/168/height/94/type/3)
    `;
  }

}
