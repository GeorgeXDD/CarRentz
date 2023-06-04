import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cars from '../../assets/mockdata/cars';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = cars[decodedTitle];
  }

    dasherize(string) {
      return string.replace(/[A-Z]/g, function(char, index) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
      });
    };
}
