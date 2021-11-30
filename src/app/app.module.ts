import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


const routes : Routes = [
  {path:'contactmanager', loadChildren : () => import('./contactmanager/contactmanager.module').then(m => m.ContactmanagerModule) },
 {path:'demo', loadChildren : () => import('./demo/demo.module').then(m => m.DemoModule) },
 {path:'**', redirectTo:'contactmanager'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
