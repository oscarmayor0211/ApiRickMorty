import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardComponent } from './list-card/list-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { SearchStatusComponent } from './search-status/search-status.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    SearchComponent,
    FilterPipe,
    FilterStatusPipe,
    SearchStatusComponent,
    EpisodesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
