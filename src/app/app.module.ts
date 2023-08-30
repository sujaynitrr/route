import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Component/first/first.component';
import { SecondComponent } from './Component/second/second.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ChildAComponent } from './Component/child-a/child-a.component';
import { ChildBComponent } from './Component/child-b/child-b.component';
import { CrisisListComponent } from './Component/crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
