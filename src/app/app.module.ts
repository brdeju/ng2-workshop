import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { MockHttpService } from './mocks/mock-http.service';
import { ApiService } from './api.service';

export function mockFactory(backend, options) {
  return new MockHttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http, 
      useFactory: mockFactory, 
      deps: [MockBackend, BaseRequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
