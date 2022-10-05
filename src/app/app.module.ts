import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { ListeComponent } from './components/liste/liste.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
