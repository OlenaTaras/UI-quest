import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestShellComponent } from './quest-shell/quest-shell/quest-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
