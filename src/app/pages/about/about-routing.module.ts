import { NgModule } from '@angular/core';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    pathMatch: 'full' //זיהוי מוחלט, נגדיר רק לקומפוננטה הראשית
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutRoutingModule { }
