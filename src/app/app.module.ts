import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppListComponent } from './app-list/app-list.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppListComponent,
    TodoComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TodoComponent, AppListComponent],
  entryComponents: [TodoComponent, AppListComponent]
})
export class AppModule { }
