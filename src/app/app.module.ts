import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { DropdownComponent } from './components/dropdown/dropdown.component';

import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { CapitalizeFirstPipe } from './pipes/capilalise-first';
import { LocationsComponent } from './components/locations/locations.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent, 
    CapitalizeFirstPipe,
    DropdownComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    LocationsComponent
    TeamInfoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
