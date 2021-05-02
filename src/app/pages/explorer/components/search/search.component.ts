import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() title$ = new EventEmitter(null);
  @Output() protocol$ = new EventEmitter(null);


  constructor() { }

  ngOnInit(): void {
  }

  timeOut:any;
  getTitle($event) {
   if(this.timeOut){clearTimeout(this.timeOut)};
    this.timeOut = setTimeout(() => {
      this.title$.emit($event.target.value);
    }, 500)
  }

  getProtocol($event) {
    this.protocol$.emit($event.target.id);

  }


}
