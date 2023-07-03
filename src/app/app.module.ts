import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import {FormsModule} from '@angular/forms';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
