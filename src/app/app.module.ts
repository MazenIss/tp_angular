import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CarteComponent } from './components/carte/carte.component';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CarteComponent,
    FilsComponent,
    PereComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
