import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'firstpage',
        loadChildren: () =>
          import('./firstpage/firstpage.module').then((m) => m.FirstpagePageModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => 
          import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => 
          import('./messages/messages.module').then( m => m.MessagesPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/tabs/firstpage',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
