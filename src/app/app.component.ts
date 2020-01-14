import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/apicall.service';
import { Observable } from 'rxjs'
import { JsonPipe } from '@angular/common';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'http-services';
  public news = [];

  constructor(private newsService: ApicallService) { }

  ngOnInit() {
    let paramsObj = {
      baseURL: 'https://newsapi.org/v2/everything'
      // baseURL: 'https://stocksmonitor-7b69e.firebaseio.com/'
    };
    this.newsService.fetchPosts(paramsObj)
      .subscribe((data) => {
        this.news = data.articles;
        console.log(this.news);
        
      })
  }
}
