import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './common/layout/layout.reducer';
import { metaReducer } from './common/index';
import { TemplateModalComponent } from './template-modal/template-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent, TemplateModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({reducer: metaReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
