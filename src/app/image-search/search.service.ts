import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private _http: HttpClient,
  ) { }

  doSearch(query: string, page: number, perPage: number = 9) {
    const url = "https://api.giphy.com/v1/gifs/search";
    const params: HttpParams = new HttpParams({ fromObject: {
      api_key: environment.giphy,
      q: query,
      limit: perPage,
      offset: (page - 1) * perPage,
      rating: 'g',
      lang: 'en',
    }});
    console.log('Param', params.toString());
    this._http.get(url, {params: params})
      .pipe() // TODO
      .subscribe(_res => console.log(_res));
  }
}
