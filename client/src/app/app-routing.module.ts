import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent as MainLayoutComponent } from './main/layout/layout.component';
import { LinksComponent } from './main/links/links.component';
import { ProfileComponent } from './main/profile/profile.component';
import { PreviewComponent } from './main/preview/preview.component';

import { LayoutComponent as AuthLayoutComponent } from './auth/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NotFoundComponent } from './error/not-found/not-found.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';

const generateTitle = (title: string) => `DevLinks | ${title}`;

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'links' },
      {
        path: 'links',
        component: LinksComponent,
        title: generateTitle('Links'),
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: generateTitle('Profile'),
      },
      {
        path: 'preview',
        component: PreviewComponent,
        title: generateTitle('Preview'),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: generateTitle('Login'),
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: generateTitle('Register'),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '500',
        component: ServerErrorComponent,
        title: generateTitle('Server Error'),
      },
      {
        path: '401',
        component: UnauthorizedComponent,
        title: generateTitle('Unauthorized'),
      },
      {
        path: '**',
        component: NotFoundComponent,
        title: generateTitle('Page Not Found'),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
