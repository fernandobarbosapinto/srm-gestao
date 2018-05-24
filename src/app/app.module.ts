import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PainelGestaoComponent } from './painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './conta-digital/conta-digital.component';
import { AntRecebiveisComponent } from './ant-recebiveis/ant-recebiveis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    PainelGestaoComponent,
    ContaDigitalComponent,
    AntRecebiveisComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
