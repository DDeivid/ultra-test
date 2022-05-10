import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSearchRoutingModule } from './image-search-routing.module';
import { PageComponent, CurrentPagePipe } from './page/page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GridItemComponent } from './grid-item/grid-item.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PageComponent,
    GridItemComponent,
    CurrentPagePipe,
  ],
  imports: [
    CommonModule,
    ImageSearchRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ]
})
export class ImageSearchModule { }
