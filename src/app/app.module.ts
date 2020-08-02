import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComptitleComponent } from './components/comptitle/comptitle.component';
import { CompbtnplayComponent } from './components/compbtnplay/compbtnplay.component';
import { CompoponentComponent } from './components/compoponent/compoponent.component';
import { CompresultComponent } from './components/compresult/compresult.component';
import { ComprestartComponent } from './components/comprestart/comprestart.component';
import { ComptableComponent } from './components/comptable/comptable.component';
import { CompselectorComponent } from './components/compselector/compselector.component';
import { CompfirstselComponent } from './components/compfirstsel/compfirstsel.component';
import { HttpClientModule } from '@angular/common/http';
import { CompestatistiComponent } from './components/compestatisti/compestatisti.component';
import { CompbtnstartComponent } from './components/compbtnstart/compbtnstart.component';


@NgModule({
  declarations: [
    AppComponent,
    ComptitleComponent,
    CompbtnplayComponent,
    CompoponentComponent,
    CompresultComponent,
    ComprestartComponent,
    ComptableComponent,
    CompselectorComponent,
    CompfirstselComponent,
    CompestatistiComponent,
    CompbtnstartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
