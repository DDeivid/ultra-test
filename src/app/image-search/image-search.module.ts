import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSearchRoutingModule } from './image-search-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    ImageSearchRoutingModule
  ]
})
export class ImageSearchModule { }
