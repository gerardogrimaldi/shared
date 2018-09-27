import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LogoThumbnailDirective } from './logo-thumbnail/logo-thumbnail.directive';
import { VideoThumbnailDirective } from './video-thumbnail/video-thumbnail.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    LogoThumbnailDirective,
    VideoThumbnailDirective
  ],
  exports: [
    CommonModule,
    LogoThumbnailDirective,
    VideoThumbnailDirective
  ]
})
export class SharedModule { }
