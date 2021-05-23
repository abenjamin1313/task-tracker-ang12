import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Services
import { ErrorHandlerService }  from './services/error/ErrorHandler.service';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: ErrorHandlerService, useClass: ErrorHandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
