import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingDashboardComponent } from './shopping-dashboard/shopping-dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HighlightFirstWordPipe } from './highlight-first-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingDashboardComponent,
    HighlightFirstWordPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
