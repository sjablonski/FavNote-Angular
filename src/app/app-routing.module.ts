import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      {
        path: 'notes',
        loadChildren: () =>
          import('./pages/notes/notes.module').then((m) => m.NotesModule),
      },
      {
        path: 'twitters',
        loadChildren: () =>
          import('./pages/twitters/twitters.module').then(
            (m) => m.TwittersModule
          ),
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('./pages/articles/articles.module').then(
            (m) => m.ArticlesModule
          ),
      },
      {
        path: 'notes/details/:itemId',
        loadChildren: () =>
          import('./pages/details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: 'twitters/details/:itemId',
        loadChildren: () =>
          import('./pages/details/details.module').then((m) => m.DetailsModule),
      },
      {
        path: 'articles/details/:itemId',
        loadChildren: () =>
          import('./pages/details/details.module').then((m) => m.DetailsModule),
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
