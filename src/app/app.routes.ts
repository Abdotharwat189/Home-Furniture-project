import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",redirectTo:"home",pathMatch:"full"
    },
    {
        path:"home",component:HomeComponent,title: "Home Page"
    },
    {
        path:"about",component:AboutComponent ,title: "About Page"
    },
    {
        path:"contact",component:ContactComponent ,title: "contact Page"
    },
    {
        path:"protfolio",component:PortfolioComponent ,title: "protfolio Page"
    },
    {
        path:"**",component:NotFoundComponent ,title: "NotFound Page"
    },
];
