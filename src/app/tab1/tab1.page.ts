import { Component } from '@angular/core';
import { Router } from '@angular/router';

import audi from '../../assets/mockdata/audi.json';
import bmw from '../../assets/mockdata/bmw.json';
import mercedes from '../../assets/mockdata/mercedes.json';
import dacia from '../../assets/mockdata/dacia.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Audi',
      cars: audi
    },
    {
      title: 'BMW',
      cars: bmw
    },
    {
      title: 'Mercedes',
      cars: mercedes
    },
    {
      title: 'Dacia',
      cars: dacia
    }
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  };
  
  constructor(private router: Router) {
    
  }

  openCar(car) {
    const titleEscaped = encodeURIComponent(car.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}
