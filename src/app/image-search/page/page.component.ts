import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  ITEMS_PER_PAGE: number = 9;
  PAGINATION_MAX_SIZE: number = 6;

  searchInput: FormControl = new FormControl();

  constructor(
    public search: SearchService,
  ) { }

  ngOnInit(): void {
    this.watchSearchInput();
    this.searchInput.setValue('Ultra');
  }

  /**
   * Looks for search input changes and will request new set of images
   */
  watchSearchInput(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(searchTerm => {
        this.search.doSearch(searchTerm, 1);
      })
  }

  /**
   * Request next page of images with same search value
   */
  changePage(newPage: number) {
    this.search.doSearch(this.searchInput.value, newPage);
  }
}

@Pipe({
  name: 'currentPage',
})
export class CurrentPagePipe implements PipeTransform {

  /** 
   * Calculates current page based on the "offset" and how many images are rendered in the grid
   */
  transform(offset: number, perPage: number) {
    return Math.floor(offset / perPage) + 1;
  }
}