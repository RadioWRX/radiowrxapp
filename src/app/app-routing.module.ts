import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// These prevent access to pages that should not be viewed if not logged in
import { AuthGuard } from './shared/services/guard/auth.guard';
import { SecureInnerPagesGuard } from './shared/services/guard/secure-inner-pages.guard';

// This section deals with route for authentication
import { UserComponent } from './user/user.component';
import { EditUserComponent} from './edit-user/edit-user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

// Ths is the landing page route when user is not signed in
import { MainPageComponent } from './main-page/main-page.component';

//This is the landing page route when a band is signed in. TODO: Sperate Bands from fans
import { ProfileComponent } from './profile/profile.component';

//This is the landing page route when a fan is signed in. TODO: Sperate Bands from fans
import { FanProfileComponent } from './fan-profile/fan-profile.component';

// This section deals with routes related to Bands services
import { EventsComponent } from './events/events.component';
import { BandsComponent } from './bands/bands.component';
import { VideosComponent } from './videos/videos.component';
import { BandsByFansComponent } from './bands-by-fans/bands-by-fans.component';
import { ContactComponent } from './contact/contact.component';
import { MyBandsEventsComponent } from './my-bands-events/my-bands-events.component';
import { MyBandsMusicComponent } from './my-bands-music/my-bands-music.component';
import { MyBandsVideosComponent } from './my-bands-videos/my-bands-videos.component';
import { MyBandsCdFundsComponent } from './my-bands-cd-funds/my-bands-cd-funds.component';
import { MyBandsPrivatePartiesComponent } from './my-bands-private-parties/my-bands-private-parties.component';
import { MyBandsMembersComponent } from './my-bands-members/my-bands-members.component';
import { MyBandsByFansComponent } from './my-bands-by-fans/my-bands-by-fans.component';

// CRUD routes for band profiles. TODO: Separate Bands for Fans
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileResolver } from './edit-profile/edit-profile.resolver';

// CRUD routes for Albums
import { CreateAlbumComponent } from './create-album/create-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { EditAlbumResolver } from './edit-album/edit-album.resolver';
import { ViewAlbumResolver } from './view-album/view-album.resolver';

// CRUD routes for Bands to add Songs to Albums
import { CreateSongComponent } from './create-song/create-song.component';
import { EditSongComponent } from './edit-song/edit-song.component';
import { EditSongResolver } from './edit-song/edit-song.resolver';


// Crud routes for Events
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { EditEventResolver } from './edit-event/edit-event.resolver';
import { ViewEventResolver } from './view-event/view-event.resolver';

// CRUD routes for Band Members
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { ViewMemberResolver } from './view-member/view-member.resolver';
import { EditMemberResolver } from './edit-member/edit-member.resolver';

// CRUD routes for Band Videos
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { EditVideoResolver } from './edit-video/edit-video.resolver';

// CRUD routes for CD  Bands Funds
import { CreateCdFundsComponent } from './create-cd-funds/create-cd-funds.component';
import { EditCdFundsComponent } from './edit-cd-funds/edit-cd-funds.component';
import { ViewCdFundsComponent } from './view-cd-funds/view-cd-funds.component';
import { EditCdFundsResolver } from './edit-cd-funds/edit-cd-funds.resolver';

//CRUD routes for Bands By Fans
import { CreateBandsByFansComponent } from './create-bands-by-fans/create-bands-by-fans.component';
import { EditBandsByFansComponent } from './edit-bands-by-fans/edit-bands-by-fans.component';
import { ViewBandsByFansComponent } from './view-bands-by-fans/view-bands-by-fans.component';
import { EditBandsByFansResolver } from './edit-bands-by-fans/edit-bands-by-fans.resolver';

// This section deals with routes for viewing all Bands
import { PopBandsComponent } from './pop-bands/pop-bands.component';
import { RockBandsComponent } from './rock-bands/rock-bands.component';
import { BluesBandsComponent } from './blues-bands/blues-bands.component';
import { AlternativeBandsComponent } from './alternative-bands/alternative-bands.component';
import { PunkBandsComponent } from './punk-bands/punk-bands.component';
import { CountryBandsComponent } from './country-bands/country-bands.component';

// This section deals with routes for viewing all Events
import { ViewAllAlbumsComponent } from './view-all-albums/view-all-albums.component';
import { ViewAllEventsComponent } from './view-all-events/view-all-events.component';
import { ViewAllVideosComponent } from './view-all-videos/view-all-videos.component';

import { GuestViewAlbumComponent } from './guest-view-album/guest-view-album.component';
import { GuestViewEventComponent } from './guest-view-event/guest-view-event.component';
import { GuestViewVideoComponent } from './guest-view-video/guest-view-video.component';

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

//This section deals with routes related to Fans Services

// CRUD routes for band profiles. TODO: Separate Bands from Fans
import { EditFanProfileComponent } from './edit-fan-profile/edit-fan-profile.component';
import { CreateFanProfileComponent } from './create-fan-profile/create-fan-profile.component';
import { EditFanProfileResolver } from './edit-fan-profile/edit-fan-profile.resolver';

// This section deals for Fans Views for all services
import { FanViewAlbumComponent } from './fan-view-album/fan-view-album.component';
import { FanViewEventComponent } from './fan-view-event/fan-view-event.component';

import { MyFansMusicComponent } from './my-fans-music/my-fans-music.component';
import { MyFansEventsComponent } from './my-fans-events/my-fans-events.component';
import { MyFansVideosComponent } from './my-fans-videos/my-fans-videos.component';
import { MyFansCDFundsComponent } from './my-fans-cdfunds/my-fans-cdfunds.component';
import { MyFansBuyBandsComponent } from './my-fans-buy-bands/my-fans-buy-bands.component';



const routes: Routes = [
  { path: '', redirectTo: 'fan-profile', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'bands', component: BandsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'bands-by-fans', component: BandsByFansComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'my-bands-events' , component: MyBandsEventsComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-music' , component: MyBandsMusicComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-videos' , component: MyBandsVideosComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-cd-funds' , component: MyBandsCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-private-parties' , component: MyBandsPrivatePartiesComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-by-fans' , component: MyBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'my-bands-members' , component: MyBandsMembersComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'edit-fan-profile', component: EditFanProfileComponent },
  { path: 'create-fan-profile', component: CreateFanProfileComponent },
  { path: 'profile', component: ProfileComponent, data: { allowedRoles: [ 'admin', 'band' ] }, canActivate: [AuthGuard] },
  { path: 'fan-profile', component: FanProfileComponent, data: { allowedRoles: [ 'admin', 'fan' ] }, canActivate: [AuthGuard] },
  { path: 'profile-details/:id', component: EditProfileComponent, resolve:{data: EditProfileResolver}},
  { path: 'fan-profile-details/:id', component: EditFanProfileComponent, resolve:{data: EditFanProfileResolver}},
  { path: 'create-album', component: CreateAlbumComponent, canActivate: [AuthGuard] },
  { path: 'view-album', component: ViewAlbumComponent, canActivate: [AuthGuard] },
  { path: 'view-album-details/:id', component: ViewAlbumComponent, resolve:{data: ViewAlbumResolver} },
  { path: 'edit-album', component: EditAlbumComponent, canActivate: [AuthGuard] },
  { path: 'edit-album-details/:id', component: EditAlbumComponent, resolve:{data: EditAlbumResolver}},
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'view-event', component: ViewEventComponent, canActivate: [AuthGuard] },
  { path: 'view-event-details/:id', component: ViewEventComponent, resolve:{data: ViewEventResolver}},
  { path: 'edit-event', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-event-details/:id', component: EditEventComponent, resolve:{data: EditEventResolver}},
  { path: 'create-member', component: CreateMemberComponent, canActivate: [AuthGuard] },
  { path: 'view-member', component: ViewMemberComponent, canActivate: [AuthGuard] },
  { path: 'view-member-details/:id', component: ViewMemberComponent, resolve:{data: ViewMemberResolver}},
  { path: 'edit-member', component: EditMemberComponent, canActivate: [AuthGuard] },
  { path: 'edit-member-details/:id', component: EditMemberComponent, resolve:{data: EditMemberResolver}},
  { path: 'create-video', component: CreateVideoComponent, canActivate: [AuthGuard] },
  { path: 'view-video', component: ViewVideoComponent, canActivate: [AuthGuard] },
  { path: 'edit-video', component: EditVideoComponent, canActivate: [AuthGuard] },
  { path: 'edit-video-details/:id', component: EditVideoComponent, resolve:{data: EditVideoResolver}},
  { path: 'create-cd-funds', component: CreateCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'view-cd-funds', component: ViewCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'edit-cd-funds', component: EditCdFundsComponent, canActivate: [AuthGuard] },
  { path: 'edit-cd-funds-details/:id', component: EditCdFundsComponent, resolve:{data: EditCdFundsResolver}},
  { path: 'create-bands-by-fans', component: CreateBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'view-bands-by-fans', component: ViewBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'edit-bands-by-fans', component: EditBandsByFansComponent, canActivate: [AuthGuard] },
  { path: 'edit-bands-by-fans-details/:id', component: EditBandsByFansComponent, resolve:{data: EditBandsByFansResolver}},
  { path: 'create-song', component: CreateSongComponent, canActivate: [AuthGuard] },
  { path: 'edit-song', component: EditSongComponent, canActivate: [AuthGuard] },
  { path: 'edit-song-details/:id', component: EditSongComponent, resolve:{data: EditSongResolver}},
  { path: 'pop-bands', component: PopBandsComponent },
  { path: 'rock-bands', component: RockBandsComponent },
  { path: 'blues-bands', component: BluesBandsComponent },
  { path: 'alternative-bands', component: AlternativeBandsComponent },
  { path: 'punk-bands', component: PunkBandsComponent },
  { path: 'country-bands', component: CountryBandsComponent },
  { path: 'january-events', component: JanuaryEventsComponent },
  { path: 'february-events', component: FebruaryEventsComponent },
  { path: 'march-events', component: MarchEventsComponent },
  { path: 'april-events', component: AprilEventsComponent },
  { path: 'may-events', component: MayEventsComponent },
  { path: 'june-events', component: JuneEventsComponent },
  { path: 'july-events', component: JulyEventsComponent },
  { path: 'august-events', component: AugustEventsComponent },
  { path: 'september-events', component: SeptemberEventsComponent },
  { path: 'october-events', component: OctoberEventsComponent },
  { path: 'november-events', component: NovemberEventsComponent },
  { path: 'december-events', component: DecemberEventsComponent },
  { path: 'view-all-albums', component: ViewAllAlbumsComponent },
  { path: 'view-all-events', component: ViewAllEventsComponent },
  { path: 'view-all-videos', component: ViewAllVideosComponent },
  { path: 'guest-view-album', component: GuestViewAlbumComponent },
  { path: 'guest-view-event', component: GuestViewEventComponent },
  { path: 'guest-view-video', component: GuestViewVideoComponent },
  { path: 'fan-view-album', component: FanViewAlbumComponent },
  { path: 'fan-view-event', component: FanViewEventComponent },
  { path: 'my-fans-music', component: MyFansMusicComponent },
  { path: 'my-fans-events', component: MyFansEventsComponent },
  { path: 'my-fans-videos', component: MyFansVideosComponent },
  { path: 'my-fans-cd-funds', component: MyFansCDFundsComponent },
  { path: 'my-fans-buy-bands', component: MyFansBuyBandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
