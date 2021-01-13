  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'view-templates',
    loadChildren: () => import('../create-mail-template/create-mail-template.module').then(m => m.CreateMailTemplateModule)
  },
  {
    path: 'send-mail-template',
    loadChildren: () => import('../send-mail-template/send-mail-template.module').then(m => m.SendMailTemplateModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
