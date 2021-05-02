import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { ExplorerPageComponent } from './components/explorer-page/explorer-page.component';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ExplorerPageComponent,
    SearchComponent,
    FilterComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ExplorerRoutingModule,
    HttpClientModule
  ]
})
export class ExplorerModule { }
