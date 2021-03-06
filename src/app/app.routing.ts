import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../components/signin/signin.component';
import { DriveComponent } from '../components/drive/drive.component';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from '../infrastructure/sessions/loggedInGuard';
import { HomeComponent } from '../components/home/home.component';
import { CalendarEventComponent } from '../components/calendar-event/calendar-event.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';


const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'home', component: HomeComponent},
    { path: 'drive', component: DriveComponent, canActivate: [LoggedInGuard] },
    { path: 'calendar', component: CalendarEventComponent, canActivate: [LoggedInGuard] },
    { path: 'youtube', component: YoutubeComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);