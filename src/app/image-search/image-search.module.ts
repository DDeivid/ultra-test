import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSearchRoutingModule } from './image-search-routing.module';
import { PageComponent } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GridItemComponent } from './grid-item/grid-item.component';


@NgModule({
  declarations: [
    PageComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule,
    ImageSearchRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ImageSearchModule { }
