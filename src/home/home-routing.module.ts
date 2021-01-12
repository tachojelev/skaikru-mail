  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home component' }
  },
  {
    path: 'send-mail-template',
    loadChildren: () => import('../send-mail-template/send-mail-template.module').then(m => m.SendMailTemplateModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
