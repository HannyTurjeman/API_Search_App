import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerPageComponent } from './components/explorer-page/explorer-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExplorerPageComponent,
    pathMatch: 'full' //זיהוי מוחלט, נגדיר רק לקומפוננטה הראשית
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ExplorerRoutingModule { }
