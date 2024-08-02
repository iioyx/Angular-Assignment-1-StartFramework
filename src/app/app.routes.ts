import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
    
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:MainComponent,title:"Home"},
    {path:"about",component:AboutComponent,title:"About"},
    {path:"portfolio",component:PortfolioComponent ,title:"Portfolio"},
    {path:"contact",component:ContactComponent ,title:"Contact"},
    {path:"**",component:NotfoundComponent,title:"Error 404"}
    
];
