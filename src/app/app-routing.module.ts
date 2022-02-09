import { LayoutComponent } from './layouts/layout.component';
import { NotAuthGuard } from './core/guards/not-auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '',
    canActivateChild: [NotAuthGuard],
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
