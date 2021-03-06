import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//This section os for the main component and routing

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

//This section is for database modules and services

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ProfileService } from './shared/services/profile.service';
import { FanProfileService } from './shared/services/fan-profile.service';
import { AuthService } from './shared/services/auth.service';
import { UploadsService } from './shared/services/uploads.service';
import { PlaylistService } from './shared/services/playlist.service';
import { PlaylistSongService } from './shared/services/playlist-song.service';
import { AudioService } from './shared/services/audio.service';
import { VirtualEventService } from './shared/services/virtual-event.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { JwtModule } from '@auth0/angular-jwt';

// This section deals with authentication, user and profile management

import { LoginComponent }  from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileResolver } from './edit-profile/edit-profile.resolver';
import { CreateFanProfileComponent } from './create-fan-profile/create-fan-profile.component';
import { EditFanProfileComponent } from './edit-fan-profile/edit-fan-profile.component';
import { EditFanProfileResolver } from './edit-fan-profile/edit-fan-profile.resolver';

// This page is the landing page if a user is logged in. TODO: Need to separate Bands from Fans.
import { ProfileComponent } from './profile/profile.component';

// Need to connect to Github

// This section is for third party add ins

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
//import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

// This page is the landing page for the site if a user is not logged in
import { MainPageComponent } from './main-page/main-page.component';


import { BandsComponent } from './bands/bands.component';
import { EventsComponent } from './events/events.component';
import { VideosComponent } from './videos/videos.component';
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';

//This section is for the Bands Management of services.

// These are the band profile landing pages
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
import { ViewSongComponent } from './view-song/view-song.component';
import { ViewSongListComponent } from './view-song-list/view-song-list.component';

// These allow for Bands to CRUD Events
import { CreateEventComponent } from './create-event/create-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditEventResolver } from './edit-event/edit-event.resolver';
import { ViewEventResolver } from './view-event/view-event.resolver';

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
import { RandomAudioPlayerComponent } from './random-audio-player/random-audio-player.component';
import { BandsBuyFans101Component } from './modals/bands-buy-fans101/bands-buy-fans101.component';
import { CdFunds101Component } from './modals/cd-funds101/cd-funds101.component';
import { Videos101Component } from './modals/videos101/videos101.component';
import { Tickets101Component } from './modals/tickets101/tickets101.component';
import { Music101Component } from './modals/music101/music101.component';
import { EventCreationOptionsComponent } from './modals/event-creation-options/event-creation-options.component';

// These are the components for listing all of the bands in the various genres
import { PopBandsComponent } from './pop-bands/pop-bands.component';
import { RockBandsComponent } from './rock-bands/rock-bands.component';
import { BluesBandsComponent } from './blues-bands/blues-bands.component';
import { AlternativeBandsComponent } from './alternative-bands/alternative-bands.component';
import { CountryBandsComponent } from './country-bands/country-bands.component';
import { PunkBandsComponent } from './punk-bands/punk-bands.component';
import { IndiBandsComponent } from './indi-bands/indi-bands.component';

//This section is for the Fans Management of services.

// These are the band profile landing pages.
import { MyFansMusicComponent } from './my-fans-music/my-fans-music.component';
import { MyFansEventsComponent } from './my-fans-events/my-fans-events.component';
import { MyFansVideosComponent } from './my-fans-videos/my-fans-videos.component';
import { MyFansCDFundsComponent } from './my-fans-cdfunds/my-fans-cdfunds.component';
import { MyFansBuyBandsComponent } from './my-fans-buy-bands/my-fans-buy-bands.component';

import { FanViewAlbumComponent } from './fan-view-album/fan-view-album.component';
import { FanViewEventComponent } from './fan-view-event/fan-view-event.component';
import { FanViewAlbumResolver } from './fan-view-album/fan-view-album.resolver';
import { FanViewEventResolver } from './fan-view-event/fan-view-event.resolver';

// These are the components for listing all of the events within their respective months
import { JanuaryEventsComponent } from './january-events/january-events.component';
import { FebruaryEventsComponent } from './february-events/february-events.component';
import { MarchEventsComponent } from './march-events/march-events.component';
import { AprilEventsComponent } from './april-events/april-events.component';
import { MayEventsComponent } from './may-events/may-events.component';
import { JuneEventsComponent } from './june-events/june-events.component';
import { JulyEventsComponent } from './july-events/july-events.component';
import { AugustEventsComponent } from './august-events/august-events.component';
import { SeptemberEventsComponent } from './september-events/september-events.component';
import { OctoberEventsComponent } from './october-events/october-events.component';
import { NovemberEventsComponent } from './november-events/november-events.component';
import { DecemberEventsComponent } from './december-events/december-events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Picture } from './reusablecomponents/picture.component';

import { ConfirmComponent } from './modals/confirm/confirm.component';
import { FanProfileComponent } from './fan-profile/fan-profile.component';
import { ViewAllAlbumsComponent } from './view-all-albums/view-all-albums.component';
import { ViewAllVideosComponent } from './view-all-videos/view-all-videos.component';
import { ViewAllEventsComponent } from './view-all-events/view-all-events.component';
import { GuestViewAlbumComponent } from './guest-view-album/guest-view-album.component';
import { GuestViewVideoComponent } from './guest-view-video/guest-view-video.component';
import { GuestViewEventComponent } from './guest-view-event/guest-view-event.component';
import { AlbumOptionsComponent } from './modals/album-options/album-options.component';
import { EventOptionsComponent } from './modals/event-options/event-options.component';

// This area deals with the purchase of events tickets
import { PurchaseTicketsComponent } from './purchase-tickets/purchase-tickets.component';

// This area deals with the craeation of playlists
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { EditPlaylistResolver } from './edit-playlist/edit-playlist.resolver';
import { ViewPlaylistResolver } from './view-playlist/view-playlist.resolver';

import { CreateVirtualEventComponent } from './create-virtual-event/create-virtual-event.component';
import { EditVirtualEventComponent } from './edit-virtual-event/edit-virtual-event.component';
import { ViewVirtualEventComponent } from './view-virtual-event/view-virtual-event.component';
import { EditVirtualEventResolver } from './edit-virtual-event/edit-virtual-event.resolver';
import { ViewVirtualEventResolver } from './view-virtual-event/view-virtual-event.resolver';


import { FanViewVirtualEventComponent } from './fan-view-virtual-event/fan-view-virtual-event.component';
import { FanViewVirtualEventResolver } from './fan-view-virtual-event/fan-view-virtual-event.resolver';

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
    ViewSongComponent,
    ViewSongListComponent,
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
    BundleidComponent,
    PopBandsComponent,
    RockBandsComponent,
    BluesBandsComponent,
    AlternativeBandsComponent,
    CountryBandsComponent,
    PunkBandsComponent,
    IndiBandsComponent,
    JanuaryEventsComponent,
    FebruaryEventsComponent,
    MarchEventsComponent,
    AprilEventsComponent,
    MayEventsComponent,
    JuneEventsComponent,
    JulyEventsComponent,
    AugustEventsComponent,
    SeptemberEventsComponent,
    OctoberEventsComponent,
    NovemberEventsComponent,
    DecemberEventsComponent,
    NavbarComponent,
    Picture,
    ConfirmComponent,
    FanProfileComponent,
    ViewAllAlbumsComponent,
    ViewAllVideosComponent,
    ViewAllEventsComponent,
    GuestViewAlbumComponent,
    GuestViewVideoComponent,
    GuestViewEventComponent,
    FanViewAlbumComponent,
    FanViewEventComponent,
    AlbumOptionsComponent,
    EventOptionsComponent,
    CreateFanProfileComponent,
    EditFanProfileComponent,
    MyFansMusicComponent,
    MyFansEventsComponent,
    MyFansVideosComponent,
    MyFansCDFundsComponent,
    MyFansBuyBandsComponent,
    RandomAudioPlayerComponent,
    BandsBuyFans101Component,
    CdFunds101Component,
    Videos101Component,
    Tickets101Component,
    Music101Component,
    PurchaseTicketsComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    ViewPlaylistComponent,
    EventCreationOptionsComponent,
    CreateVirtualEventComponent,
    EditVirtualEventComponent,
    ViewVirtualEventComponent,
    FanViewVirtualEventComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOzf49n-sRTXrZqA7m4V7_EXjTuE5z-UQ'
    }),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBb82HWWLtPM2i_anYPWmP45vPeI81B03o",
      authDomain: "radiowrx-app.firebaseapp.com",
      projectId: "radiowrx-app",
      storageBucket: "radiowrx-app.appspot.com",
    }),
    AngularFireStorageModule,
    JwtModule.forRoot({})
  ],
  providers: [AuthService, ProfileService, FanProfileService, PlaylistService,
              UploadsService, AudioService, EditProfileResolver, PlaylistSongService,
              EditAlbumResolver, EditMemberResolver, EditEventResolver,
              EditVideoResolver, EditCdFundsResolver, EditBandsByFansResolver,
              ViewAlbumResolver, ViewMemberResolver, EditSongResolver, ViewEventResolver,
              EditFanProfileResolver, FanViewAlbumResolver, FanViewEventResolver,
              EditPlaylistResolver, ViewPlaylistResolver, ViewVirtualEventResolver,
              EditVirtualEventResolver, FanViewVirtualEventResolver ],
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
  BundleidComponent,
  ConfirmComponent,
  AlbumOptionsComponent,
  EventOptionsComponent,
  BandsBuyFans101Component,
  CdFunds101Component,
  Videos101Component,
  Tickets101Component,
  Music101Component,
  EventCreationOptionsComponent
  ]
})
export class AppModule { }
