import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  searchInput: FormControl = new FormControl();
  currentPage: number = 1; // TODO

  constructor(
    private search: SearchService,
  ) { }

  ngOnInit(): void {
    this.watchSearchInput();
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
        this.search.doSearch(searchTerm, this.currentPage);
      })
  }

}
