import { GiphyImage } from './../giphy-image';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  @Input() item!: GiphyImage;
}
