import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoDetailComponent } from "./video-detail/video-detail.component";
import { SearchDetailsComponent } from "./search-details/search-details.component";

export const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'search',
        component: SearchDetailsComponent,
    },
    {
        path:'videos',
        component: VideoListComponent,
    },
    {
        path:'videos/:slug',
        component: VideoDetailComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}