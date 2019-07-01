import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    },
        )
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

  ],
  providers: [
      MatDatepickerModule,
      MatNativeDateModule,
      HttpClient,
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
