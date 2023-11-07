import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';

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
import { HeadingComponent } from './shared/components/heading/heading.component';
import { MockupComponent } from './shared/components/mockup/mockup.component';

import { DevlinksComponent } from './shared/icons/devlinks.component';
import { DevlinksSmallComponent } from './shared/icons/devlinks-small.component';
import { EnvelopeComponent } from './shared/icons/envelope.component';
import { LockKeyComponent } from './shared/icons/lock-key.component';
import { LinkCircleComponent } from './shared/icons/link-circle.component';
import { LinkCircleSmallComponent } from './shared/icons/link-circle-small.component';
import { LinkBoldComponent } from './shared/icons/link-bold.component';
import { UserCircleComponent } from './shared/icons/user-circle.component';
import { DevLinkComponent } from './shared/components/dev-link/dev-link.component';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { ArrowRightComponent } from './shared/icons/arrow-right.component';
import { GithubComponent } from './shared/icons/platforms/github.component';
import { CodepenComponent } from './shared/icons/platforms/codepen.component';
import { CodewarsComponent } from './shared/icons/platforms/codewars.component';
import { DevToComponent } from './shared/icons/platforms/dev-to.component';
import { FacebookComponent } from './shared/icons/platforms/facebook.component';
import { FreeCodeCampComponent } from './shared/icons/platforms/freecodecamp.component';
import { FrontendMentorComponent } from './shared/icons/platforms/frontend-mentor.component';
import { GitlabComponent } from './shared/icons/platforms/gitlab.component';
import { HashnodeComponent } from './shared/icons/platforms/hashnode.component';
import { LinkedInComponent } from './shared/icons/platforms/linkedin.component';
import { StackOverflowComponent } from './shared/icons/platforms/stack-overflow.component';
import { TwitchComponent } from './shared/icons/platforms/twitch.component';
import { TwitterComponent } from './shared/icons/platforms/twitter.component';
import { YoutubeComponent } from './shared/icons/platforms/youtube.component';
import { ImageUploadComponent } from './shared/icons/image-upload.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { DiskComponent } from './shared/icons/disk.component';
import { EyeBoldComponent } from './shared/icons/eye-bold.component';
import { FormSelectComponent } from './shared/components/form-select/form-select.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { PlatformIconsComponent } from './shared/components/platform-icons/platform-icons.component';
import { LinkComponent } from './main/links/link/link.component';

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
    DevlinksSmallComponent,
    EnvelopeComponent,
    LockKeyComponent,
    LinkBoldComponent,
    LinkCircleComponent,
    LinkCircleSmallComponent,
    UserCircleComponent,
    ButtonComponent,
    TextInputComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    ServerErrorComponent,
    HeadingComponent,
    MockupComponent,
    DevLinkComponent,
    AvatarComponent,
    UserDetailsComponent,
    ArrowRightComponent,
    ImageUploadComponent,
    DiskComponent,
    EyeBoldComponent,
    GithubComponent,
    CodepenComponent,
    CodewarsComponent,
    DevToComponent,
    FacebookComponent,
    FreeCodeCampComponent,
    FrontendMentorComponent,
    GitlabComponent,
    HashnodeComponent,
    LinkedInComponent,
    StackOverflowComponent,
    TwitchComponent,
    TwitterComponent,
    YoutubeComponent,
    ToastComponent,
    FormSelectComponent,
    ClickOutsideDirective,
    PlatformIconsComponent,
    LinkComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
    PortalModule,
    OverlayModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
