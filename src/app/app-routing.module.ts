import { PerfilComponent } from './area-logada/usuario/perfil/perfil/perfil.component';
import { HistoricoEmprestimosComponent } from './area-logada/admin/historico-emprestimos/historico-emprestimos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlterarEquipamentosComponent } from './area-logada/admin/alterar-equipamentos/alterar-equipamentos.component';
import { CadastrarEquipamentosComponent } from './area-logada/admin/cadastrar-equipamentos/cadastrar-equipamentos.component';
import { DetalharEquipamentosComponent } from './area-logada/detalhar-equipamentos/detalhar-equipamentos.component';
import { HomeComponent } from './area-logada/home/home.component';
import { EquipamentosComponent } from './area-logada/usuario/equipamentos/equipamentos.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';
import { GerenciarEquipamentosComponent } from './area-logada/admin/gerenciar-equipamentos/gerenciar-equipamentos.component';
import { GerenciarColaboradoresComponent } from './area-logada/admin/gerenciar-colaboradores/gerenciar-colaboradores.component';
import { CadastrarColaboradoresComponent } from './area-logada/admin/cadastrar-colaboradores/cadastrar-colaboradores.component';
import { AlterarColaboradoresComponent } from './area-logada/admin/alterar-colaboradores/alterar-colaboradores.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'termos-condicoes', component: TermosCondicoesComponent },
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent },
  { path: 'gerenciar-equipamentos', component: GerenciarEquipamentosComponent },
  { path: 'gerenciar-equipamentos/:page/:size', component: GerenciarEquipamentosComponent },
  { path: 'cadastrar-equipamentos', component: CadastrarEquipamentosComponent },
  { path: 'alterar-equipamentos/:id', component: AlterarEquipamentosComponent },
  { path: 'equipamentos', component: EquipamentosComponent },
  { path: 'detalhar-equipamentos/:id', component: DetalharEquipamentosComponent },
  { path: 'gerenciar-colaboradores', component: GerenciarColaboradoresComponent },
  { path: 'cadastrar-colaboradores', component: CadastrarColaboradoresComponent },
  { path: 'alterar-colaboradores', component: AlterarColaboradoresComponent },
  { path: 'historico-emprestimos', component: HistoricoEmprestimosComponent},
  { path: 'historico-emprestimos/:page/:size', component: HistoricoEmprestimosComponent},
  { path: 'perfil/:id', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
