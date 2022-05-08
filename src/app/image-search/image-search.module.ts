import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSearchRoutingModule } from './image-search-routing.module';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    ImageSearchRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ImageSearchModule { }
