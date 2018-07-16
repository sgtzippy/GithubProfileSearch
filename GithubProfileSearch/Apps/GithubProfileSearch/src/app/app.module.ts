import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './components/app-component/app.component';
import { SearchProfileComponentComponent } from './components/search-profile-component/search-profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchProfileComponentComponent
  ],
  imports: [
      BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
