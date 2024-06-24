import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'tex',
    loadChildren: () => import('./tex/tex.module').then((m) => m.TexPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
        import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
        import('./payment/payment.module').then((m) => m.PaymentPageModule),
  },
  {
    path: 'mood',
    loadChildren: () =>
      import('./mood/mood.module').then((m) => m.MoodPageModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./report/report.module').then((m) => m.ReportPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
