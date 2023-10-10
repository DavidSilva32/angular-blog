import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  smallCard_list: Article

  constructor() { 
    this.smallCard_list = [{
      id: '',
      title: '',
      photoCover: '',
      description: '',
    }]
  }

  ngOnInit(): void { 
    this.getSmallCardData('1')
  }

  getSmallCardData(id: string) {
    const result = dataFake.filter((article) => article.id != id)

    this.smallCard_list = result
  }
}
