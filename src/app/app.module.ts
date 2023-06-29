import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainModule} from "./modules/main.module";
import {MainPageComponent} from "./pages/main-page/main-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
