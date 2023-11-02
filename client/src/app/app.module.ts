import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent as MainLayoutComponent } from './main/layout/layout.component';
import { LinksComponent } from './main/links/links.component';
import { ProfileComponent } from './main/profile/profile.component';
import { PreviewComponent } from './main/preview/preview.component';

import { LayoutComponent as AuthLayoutComponent } from './auth/layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { NotFoundComponent } from './error/not-found/not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';

import { LogoComponent } from './shared/components/logo/logo.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TextInputComponent } from './shared/components/form-input/form-input.component';

import { DevlinksComponent } from './shared/icons/devlinks.component';
import { EnvelopeComponent } from './shared/icons/envelope.component';
import { LockKeyComponent } from './shared/icons/lock-key.component';
import { LinkCircleComponent } from './shared/icons/link-circle.component';
import { HeadingComponent } from './shared/components/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    ProfileComponent,
    PreviewComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    LogoComponent,
    DevlinksComponent,
    EnvelopeComponent,
    LockKeyComponent,
    LinkCircleComponent,
    ButtonComponent,
    TextInputComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    ServerErrorComponent,
    HeadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
