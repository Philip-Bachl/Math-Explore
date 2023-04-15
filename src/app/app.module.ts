import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MathBrowseComponent } from './math-browse/math-browse.component';
import { MathSearchComponent } from './math-search/math-search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormularsComponent } from './formulars/formulars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MathBrowseComponent,
    MathSearchComponent,
    SidebarComponent,
    NotFoundComponent,
    FormularsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
