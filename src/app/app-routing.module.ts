import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { StartsliderComponent } from './components/startslider/startslider.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeaturesComponent } from './components/features/features.component';
import { Neonrom3rwebComponent } from './components/neonrom3rweb/neonrom3rweb.component';
import { RomsgridComponent } from './components/neonrom3rweb/romsgrid/romsgrid.component';
const routes: Routes = [
{path:'',component:StartsliderComponent},
{path:'news',component:NewsComponent},
{path:'gallery',component:GalleryComponent},
{path:'features',component:FeaturesComponent},
{path:'neonromerweb',component:Neonrom3rwebComponent,
children:[
  {path:'**',component:RomsgridComponent},

]},
{path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
