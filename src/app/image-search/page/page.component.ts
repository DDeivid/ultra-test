import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    private search: SearchService,
  ) { }

  ngOnInit(): void {
    this.search.doSearch('lotr', 3);
  }

}
