import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http'

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  fetchPosts(searchParameters) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('apiKey', '2a8fb1a632294fc59aea11924ab91668');
    searchParams = searchParams.append('q', 'top stocks nse');
    // searchParams = searchParams.append('sortyBy', sortBy);
    searchParams = searchParams.append('from', '01-01-2020');
    // searchParams = searchParams.append('to', to);
    // searchParams = searchParams.append('catergory', catergory);
    // searchParams = searchParams.append('language', language);
    // searchParams = searchParams.append('country', country);

    return this.http
      .get(
        searchParameters.baseURL,
        {
          params: searchParams,
          responseType: 'json'
        }
      );
  }

  getNewsFromDB(){
    return this.db.collection('/allNews').valueChanges();
  }

  addNews(data) {
    if(data.status === 'ok' && data.articles.length > 0) {
      data.articles.forEach(element => {
        this.db.collection('allNews').add(element)
        .then(data => {
          console.log('data added successfully :' +  data);
        })
        .catch( error => {
          console.log( 'error: ' +  error);
          console.log( 'error in saving data: ' +  element);
        })
      });
    }
  }
}
