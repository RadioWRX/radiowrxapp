import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//This section os for the main component and routing

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//This section is for database modules and services

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ProfileService } from './shared/services/profile.service';
import { AuthService } from './shared/services/auth.service';

// This section deals with authentication, user and profile management

import { LoginComponent }  from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileResolver } from './edit-profile/edit-profile.resolver'

// This page is the landing page if a user is logged in. TODO: Need to separate Bands from Fans.
import { ProfileComponent } from './profile/profile.component';

// This section is for third party add ins

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal'
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';

// This page is the landing page for the site if a user is not logged in
import { MainPageComponent } from './main-page/main-page.component';


import { BandsComponent } from './bands/bands.component';
import { EventsComponent } from './events/events.component';
import { VideosComponent } from './videos/videos.component';
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';

//This section is for the Bands Management of services.

// These are the profile landin pages
import { MyBandsMusicComponent } from './my-bands-music/my-bands-music.component';
import { MyBandsEventsComponent } from './my-bands-events/my-bands-events.component';
import { MyBandsVideosComponent } from './my-bands-videos/my-bands-videos.component';
import { MyBandsCdFundsComponent } from './my-bands-cd-funds/my-bands-cd-funds.component';
import { MyBandsPrivatePartiesComponent } from './my-bands-private-parties/my-bands-private-parties.component';
import { MyBandsMembersComponent } from './my-bands-members/my-bands-members.component';
import { MyBandsByFansComponent } from './my-bands-by-fans/my-bands-by-fans.component';

// These allow for Bands to CRUD Albums
import { CreateAlbumComponent } from './create-album/create-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { EditAlbumResolver } from './edit-album/edit-album.resolver';
import { ViewAlbumResolver } from './view-album/view-album.resolver';

// These allow for Bands to CRUD songs and add to Albums
import { EditSongComponent } from './edit-song/edit-song.component';
import { CreateSongComponent } from './create-song/create-song.component';
import { EditSongResolver } from './edit-song/edit-song.resolver';

// These allow for Bands to CRUD Events
import { CreateEventComponent } from './create-event/create-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditEventResolver } from './edit-event/edit-event.resolver';

// These allow for Bands to CRUD Band Members
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { EditMemberResolver } from './edit-member/edit-member.resolver';
import { ViewMemberResolver } from './view-member/view-member.resolver';

// These allow for Bands to CRUD Videos
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { EditVideoResolver } from './edit-video/edit-video.resolver';

// These allow for Bands to CRUD CD Funds
import { CreateCdFundsComponent } from './create-cd-funds/create-cd-funds.component';
import { EditCdFundsComponent } from './edit-cd-funds/edit-cd-funds.component';
import { ViewCdFundsComponent } from './view-cd-funds/view-cd-funds.component';
import { EditCdFundsResolver } from './edit-cd-funds/edit-cd-funds.resolver';

// These allow for Bands to CRUD Bands By Fans
import { CreateBandsByFansComponent } from './create-bands-by-fans/create-bands-by-fans.component';
import { EditBandsByFansComponent } from './edit-bands-by-fans/edit-bands-by-fans.component';
import { ViewBandsByFansComponent } from './view-bands-by-fans/view-bands-by-fans.component';
import { EditBandsByFansResolver } from './edit-bands-by-fans/edit-bands-by-fans.resolver';

// These are the Modals for information purposes
import { SomeComponent } from './some/some.component';
import { IsrcComponent } from './modals/isrc/isrc.component';
import { IswcComponent } from './modals/iswc/iswc.component';
import { WritersComponent } from './modals/writers/writers.component';
import { PublisherComponent } from './modals/publisher/publisher.component';
import { LabelComponent } from './modals/label/label.component';
import { ProductComponent } from './modals/product/product.component';
import { DiscComponent } from './modals/disc/disc.component';
import { GridComponent } from './modals/grid/grid.component';
import { BundlenameComponent } from './modals/bundlename/bundlename.component';
import { ProductnameComponent } from './modals/productname/productname.component';
import { BundleidComponent } from './modals/bundleid/bundleid.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BandsComponent,
    EventsComponent,
    VideosComponent,
    BandsByFansComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    ContactComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    EditUserComponent,
    MyBandsMusicComponent,
    MyBandsEventsComponent,
    MyBandsVideosComponent,
    MyBandsCdFundsComponent,
    MyBandsPrivatePartiesComponent,
    MyBandsMembersComponent,
    EditProfileComponent,
    CreateProfileComponent,
    ProfileComponent,
    AvatarDialogComponent,
    CreateAlbumComponent,
    EditAlbumComponent,
    ViewAlbumComponent,
    CreateEventComponent,
    ViewEventComponent,
    EditEventComponent,
    CreateMemberComponent,
    EditMemberComponent,
    ViewMemberComponent,
    CreateVideoComponent,
    EditVideoComponent,
    ViewVideoComponent,
    CreateCdFundsComponent,
    EditCdFundsComponent,
    ViewCdFundsComponent,
    CreateBandsByFansComponent,
    EditBandsByFansComponent,
    ViewBandsByFansComponent,
    MyBandsByFansComponent,
    EditSongComponent,
    CreateSongComponent,
    SomeComponent,
    IsrcComponent,
    IswcComponent,
    WritersComponent,
    PublisherComponent,
    LabelComponent,
    ProductComponent,
    DiscComponent,
    GridComponent,
    BundlenameComponent,
    ProductnameComponent,
    BundleidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AuthService, ProfileService, EditProfileResolver,
              EditAlbumResolver, EditMemberResolver, EditEventResolver,
              EditVideoResolver, EditCdFundsResolver, EditBandsByFansResolver,
              ViewAlbumResolver, ViewMemberResolver, EditSongResolver],
  bootstrap: [AppComponent],
  entryComponents: [
  SomeComponent,
  IsrcComponent,
  IswcComponent,
  WritersComponent,
  PublisherComponent,
  LabelComponent,
  ProductComponent,
  DiscComponent,
  GridComponent,
  BundlenameComponent,
  ProductnameComponent,
  BundleidComponent]
})
export class AppModule { }
