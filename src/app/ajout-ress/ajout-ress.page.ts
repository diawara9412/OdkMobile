import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-ress',
  templateUrl: './ajout-ress.page.html',
  styleUrls: ['./ajout-ress.page.scss'],
})
export class AjoutRessPage implements OnInit {
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 1.3,
  };
  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor() { }

  ngOnInit() {
    // this.popularItems = this.apiService.items;
    // this.featuredItems = this.apiService.items;
  }

}
