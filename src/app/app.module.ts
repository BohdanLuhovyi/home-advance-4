import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { SearchPipe } from './lesson4/search.pipe';
import { SortPipe } from './lesson4/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson4Component,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
