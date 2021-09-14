import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from '../material-module';

import { NotesComponent } from './notes.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, NotesComponent, TimerComponent ],
  providers: [ Title ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
