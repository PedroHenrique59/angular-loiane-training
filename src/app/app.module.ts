import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputPropertyComponent } from './componentes-gerais/input-property/input-property.component';
import { OutputPropertyComponent } from './componentes-gerais/output-property/output-property.component';
import { DiretivaNgifComponent } from './componentes-gerais/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './componentes-gerais/diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgclassComponent } from './componentes-gerais/diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './componentes-gerais/diretiva-ngstyle/diretiva-ngstyle.component';
import {FormsModule} from '@angular/forms';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './componentes-gerais/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { ExemplosPipesComponent } from './componentes-gerais/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './componentes-gerais/pipes/camel-case.pipe';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FiltroArrayPipe } from './componentes-gerais/pipes/filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './componentes-gerais/pipes/filtro-array-impuro.pipe';
import { CursosComponent } from './componentes-rotas/cursos/cursos.component';
import { HomeComponent } from './componentes-rotas/home/home.component';
import { LoginComponent } from './componentes-rotas/login/login.component';

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
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    CursosComponent,
    HomeComponent,
    LoginComponent
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
