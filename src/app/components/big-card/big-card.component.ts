import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.sass']
})
export class BigCardComponent implements OnInit {

  @Input() 
  photoCover: string = "https://th.bing.com/th/id/OIP.ycDC9N1rUlha8ViOS4DemQHaEK?pid=ImgDet&rs=1"
  @Input()
  cardTitle: string = "New Iron Man Announced"
  @Input()
  cardDescription: string = "Marvel studios announced new Iron Man movie"
  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
