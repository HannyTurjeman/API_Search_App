import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  protocolList:string[] = ['All', 'HTTP','HTTPS'];
  @Input() categories:string[];
  @Output() category$ = new EventEmitter(null);
  @Output() protocol$ = new EventEmitter(null)



  getCategory($event) {
    this.category$.emit($event.target.value);
  }

  getProtocol($event) {
    this.protocol$.emit($event.target.id);

  }

}
