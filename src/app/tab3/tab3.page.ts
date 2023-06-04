import { Component } from '@angular/core';
import { NewsService } from './news.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  newsItems: any[];

  constructor(private newsService: NewsService) {}
  ionViewDidEnter() {
    this.newsService.getCarNews().subscribe(
      (response) => {
        this.newsItems = response.articles;
      },
      (error) => {
        console.error('Failed to fetch car news', error);
      }
    );
  }
  
  openNews(url: string) {
    window.open(url, '_blank');
  }
}
