import { Component, OnInit } from '@angular/core';

import  { faHome } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.scss']
})
export class HomeBtnComponent implements OnInit {

  faHome = faHome; 

  constructor() { }

  ngOnInit(): void {
  }

}
