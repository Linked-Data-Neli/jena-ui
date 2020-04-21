import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Query1Component } from './forms/query1/query1.component';
import { FormDirective } from './form.directive';
import { HttpClientModule } from '@angular/common/http';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { Query2Component } from './forms/query2/query2.component';
import { Query3Component } from './forms/query3/query3.component';

@NgModule({
  declarations: [
    AppComponent,
    Query1Component,
    FormDirective,
    ResultDisplayComponent,
    Query2Component,
    Query3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
