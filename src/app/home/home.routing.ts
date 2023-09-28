import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoDettagliComponent } from "./video-dettagli/video-dettagli.component";

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'video-list',
        component: VideoListComponent
    },
    {
        path: 'video-dettagli',
        component: VideoDettagliComponent
    },
    {
        path: '',
        redirectTo : 'home',
        pathMatch: "full"
    }
    


];

export const homeRouting = RouterModule.forChild(homeRoutes);
