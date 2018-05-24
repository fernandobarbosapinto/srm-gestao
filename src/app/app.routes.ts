import { Routes } from '@angular/router';
import { PainelGestaoComponent } from './painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './conta-digital/conta-digital.component';
import { AntRecebiveisComponent } from './ant-recebiveis/ant-recebiveis.component';
export const ROUTES: Routes = [
    {path:'painel-gestao', component: PainelGestaoComponent},
    {path:'conta-digital', component: ContaDigitalComponent},
    {path:'antecipa-recebiveis', component: AntRecebiveisComponent}
]