import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
