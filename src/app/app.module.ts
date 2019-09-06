import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialsModule } from './materials/materials.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppListComponent } from './app-list/app-list.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
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
