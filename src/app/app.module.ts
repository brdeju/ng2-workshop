import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { DetailsComponent } from './details/details.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { MockHttpService } from './mocks/mock-http.service';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ApiService } from './api.service';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';

export function mockFactory(backend, options) {
  return new MockHttpService(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditorComponent,
    DetailsComponent,
    LimitToPipe,
    ListItemComponent,
    FilterByCategoryPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    SearchService,
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
