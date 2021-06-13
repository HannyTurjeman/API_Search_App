
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apiSearchApp';
  agree:boolean =  false ;

  constructor() {
    localStorage.setItem('agree', 'false');
  }




saveAgree() {
  this.agree = true;
  localStorage.setItem('agree', 'true');
  console.log(this.agree);
}



}






  // listByCategory:any;
  // getListByCategory($event) {
  //   this.listByCategory = this.getListService.getListByCategory($event).subscribe((data:List) => {
  //     this.listEntries= data.entries;
  //     this.listEntriesBackUp = data.entries;
  //   })
  // }
