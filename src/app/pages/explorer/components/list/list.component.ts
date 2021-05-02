import { Component, Input, OnInit } from '@angular/core';
import { cardInterface } from 'src/app/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list:cardInterface[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
