  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewHistoryComponent } from './view-history.component';

const routes: Routes = [
  {
    path: '',
    component: ViewHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewHistoryRoutingModule { }
