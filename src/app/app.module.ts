import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//routes
import { APP_ROUTING } from './app.routes';
// services


import { HeroesService } from './services/heroes.service';
//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
