import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./components/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./components/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
