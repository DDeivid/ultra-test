import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GiphyApiResponse, GiphyImage } from './giphy-image';
import { Observable, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  images$: Observable<Array<GiphyImage>> = new Subject<Array<GiphyImage>>();

  constructor(
    private _http: HttpClient,
  ) { }

  doSearch(query: string, page: number, perPage: number = 9): void {
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

    this.images$ = this._http.get<GiphyApiResponse>(url, {params: params})
      .pipe(
        map(res => {
          return res.data.map(data => {
            return {
              title: data.title,
              url: `https://i.giphy.com/media/${data.id}/giphy.mp4`,
              thumbnailUrl: `https://i.giphy.com/media/${data.id}/480w_s.jpg`,
              giphyUrl: data.url,
            };
          });
        }),
      );
  }
}
