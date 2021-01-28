  
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
    loadChildren: () => import('../template-dashboard/template-dashboard.module').then(m => m.TemplateDashboardModule)
  },
  {
    path: 'send-mail-template',
    loadChildren: () => import('../send-mail-template/send-mail-template.module').then(m => m.SendMailTemplateModule)
  },
  {
    path: 'view-history',
    loadChildren: () => import('../view-history/view-history.module').then(m => m.ViewHistoryModule)
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
