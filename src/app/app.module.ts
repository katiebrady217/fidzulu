import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { CapitalizeFirstPipe } from './pipes/capilalise-first';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent, 
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
