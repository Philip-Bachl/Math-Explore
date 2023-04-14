import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathBrowseComponent } from './math-browse/math-browse.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { MathSearchComponent } from './math-search/math-search.component';

const routes: Routes = [
  {path: "browse/:browsePage", component: MathBrowseComponent},
  {path: "search", component: MathSearchComponent},
  {path: "404", component: NotFoundComponent},
  {path: "", component: MathSearchComponent},
  {path: "**", redirectTo: "404", pathMatch: "full"}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }