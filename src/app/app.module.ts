import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterializeModule } from "angular2-materialize";
import { StartsliderComponent } from './components/startslider/startslider.component';
import { NewsComponent } from './components/news/news.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeaturesComponent } from './components/features/features.component';
import { Neonrom3rwebComponent } from './components/neonrom3rweb/neonrom3rweb.component';
import { NeonromerwebnavbarComponent } from './components/neonrom3rweb/neonromerwebnavbar/neonromerwebnavbar.component';
import { RomsgridComponent } from './components/neonrom3rweb/romsgrid/romsgrid.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {VirtualScrollerModule} from 'ngx-virtual-scroller'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartsliderComponent,
    NewsComponent,
    GalleryComponent,
    FeaturesComponent,
    Neonrom3rwebComponent,
    NeonromerwebnavbarComponent,
    RomsgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    InfiniteScrollModule,
    ScrollingModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
