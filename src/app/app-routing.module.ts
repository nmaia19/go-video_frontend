import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlterarEquipamentosComponent } from './area-logada/admin/alterar-equipamentos/alterar-equipamentos.component';
import { CadastrarEquipamentosComponent } from './area-logada/admin/cadastrar-equipamentos/cadastrar-equipamentos.component';
import { DetalharEquipamentosComponent } from './area-logada/detalhar-equipamentos/detalhar-equipamentos.component';
import { HomeComponent } from './area-logada/home/home.component';
import { EquipamentosComponent } from './area-logada/usuario/equipamentos/equipamentos.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'cadastrar-equipamentos', component: CadastrarEquipamentosComponent },
  { path: 'alterar-equipamentos', component: AlterarEquipamentosComponent },
  { path: 'equipamentos', component: EquipamentosComponent },
  { path: 'detalhar-equipamentos', component: DetalharEquipamentosComponent },

  { path: 'detalhar-equipamentos', component: DetalharEquipamentosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
