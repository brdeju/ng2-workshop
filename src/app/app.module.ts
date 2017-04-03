import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { MockHttpService } from './mocks/mock-http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { ElementListComponent } from './element-list/element-list.component';
import { ApiService } from './api.service';
import { ElementDetailsComponent } from './element-details/element-details.component';
import { ElementEditComponent } from './element-edit/element-edit.component';

export function mockFactory() {
  return new MockHttpService();
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LimitToPipe,
    ElementListComponent,
    ElementDetailsComponent,
    ElementEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: Http, 
      useFactory: mockFactory
    }, ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
