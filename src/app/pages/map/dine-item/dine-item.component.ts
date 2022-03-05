import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dine-item',
  templateUrl: './dine-item.component.html',
  styleUrls: ['./dine-item.component.scss']
})
export class DineItemComponent implements OnInit {

  @Input() restaurant;

  constructor() { }

  ngOnInit(): void {
  }

}
