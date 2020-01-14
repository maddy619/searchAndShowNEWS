import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-result',
  templateUrl: './news-result.component.html',
  styleUrls: ['./news-result.component.less']
})
export class NewsResultComponent implements OnInit {

  @Input() news = [];
  constructor() { }

  ngOnInit() {
  }

}
