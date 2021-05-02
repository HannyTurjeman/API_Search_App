import { Component, OnInit } from '@angular/core';
import { GetListService } from 'src/app/get-list.service';
import { cardInterface, List } from 'src/app/list.interface';

@Component({
  selector: 'app-explorer-page',
  templateUrl: './explorer-page.component.html',
  styleUrls: ['./explorer-page.component.scss']
})
export class ExplorerPageComponent implements OnInit {

  constructor(private getListService:GetListService) { }
  protocol:string;

  ngOnInit() {
    this.getListFromServer();
    this.getCatgoriesFromServer();
  }

  listEntries:any;
  listEntriesSub:any;
  listEntriesBackUp:any;
  getListFromServer() {
    if(this.listByTitle){this.listByTitle.unsubscribe()};
    this.listEntriesSub = this.getListService.getList().subscribe((data:List) => {
      this.listEntries = data.entries;
      this.listEntriesBackUp = data.entries;
    })
  }

  listCategories:any;
  listForFilter:any;
  getCatgoriesFromServer() {
    this.listForFilter = this.getListService.getCategories().subscribe((data:string) => {
      this.listCategories = ["All", ...data];

    })
  }


  listByTitle:any;
  listByTitleBckUp:any;
  getListByTitle(type, $event) {
    if(this.listEntriesSub){this.listEntriesSub.unsubscribe();};
    if(type === 'title'){
      this.listByTitle = this.getListService.getListByTitle($event).subscribe((data:List) => {
        this.listEntries= data.entries;
        this.listEntriesBackUp = data.entries;
        this.listByTitleBckUp =data.entries;
    })
   }

   if(type === 'protocol' && this.listByTitleBckUp != null) {
    this.listEntries = this.listByTitleBckUp.filter((data:cardInterface) => {
      return $event === 'http' ? !data.HTTPS : $event === 'https' ? data.HTTPS : true;
    })
  }

  }

  listByCategory:any;
  listWithCategory:any;
  filterByCategory(type, $event) {
    if(type === 'category') {
          this.listEntries = this.listEntriesBackUp.filter((data:cardInterface) => {
      return $event !== 'All' ? $event === data.Category: true; //condition? (return if true): (return if false)
      })
    this.listWithCategory = this.listEntries;
    }

    if(type === 'protocol') {
      this.listEntries = this.listWithCategory.filter((data:cardInterface) => {
        return $event === 'http' ? !data.HTTPS : $event === 'https' ? data.HTTPS : true;
      })
    }
  }



}
