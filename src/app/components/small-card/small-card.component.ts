import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.sass']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = "https://th.bing.com/th/id/R.59fc1adf2d7aae758374430d7a5c6b20?rik=5vHKe4LN1Or9MQ&pid=ImgRaw&r=0"
  @Input()
  cardTitle: string = "Series Marvel"
  @Input()
  alt: string = "Aside Image"
  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
