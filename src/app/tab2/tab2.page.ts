import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data = [
    { "id": 0, "image": "audiA5", "title": "Audi A5" },
    { "id": 1, "image": "audiQ5", "title": "Audi Q5" },
    { "id": 2, "image": "audiA6", "title": "Audi A6" },
    { "id": 3, "image": "audiA4", "title": "Audi A4" },
    { "id": 4, "image": "audiQ4E", "title": "Audi Q4 E-Tron" },
    { "id": 0, "image": "bmwM5", "title": "BMW M5" },
    { "id": 1, "image": "bmwX6", "title": "BMW X6" },
    { "id": 2, "image": "bmwM4C", "title": "BMW M4 Coupe" },
    { "id": 3, "image": "bmwS3", "title": "BMW Seria 3" },
    { "id": 4, "image": "bmwM8C", "title": "BMW M8 Cabriolet" },
    { "id": 0, "image": "mercedesAmgGtr", "title": "Mercedes AMG GTR" },
    { "id": 1, "image": "mercedesAmgCls", "title": "Mercedes AMG CLS" },
    { "id": 2, "image": "mercedesSlC", "title": "Mercedes SL Cabrio" },
    { "id": 3, "image": "mercedesGle", "title": "Mercedes GLE" },
    { "id": 0, "image": "daciaSandero", "title": "Dacia Sandero" },
    { "id": 1, "image": "daciaDuster", "title": "Dacia Duster" },
    { "id": 2, "image": "daciaLogan", "title": "Dacia Logan" }  
  ];

  filteredData = [];
  searchQuery = ''; 

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    const query = event.target.value;
    this.filteredData = this.data.filter(brand =>
      brand.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  openBrand(brand) {
    const titleEscaped = encodeURIComponent(brand.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }
}
