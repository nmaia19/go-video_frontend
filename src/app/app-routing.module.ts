import { AcessoNegadoComponent } from './core/acesso-negado/acesso-negado.component';
import { AlterarSenhaComponent } from './area-logada/usuario/alterar-senha/alterar-senha.component';
import { LoginComponent } from './area-deslogada/login/login.component';
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
import { AuthGuard } from './core/services/auth-guard/auth.guard';
import { MeusEmprestimosComponent } from './area-logada/usuario/meus-emprestimos/meus-emprestimos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'termos-condicoes', component: TermosCondicoesComponent},
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent},
  { path: 'gerenciar-equipamentos', component: GerenciarEquipamentosComponent, canActivate: [AuthGuard], data: { role: "ROLE_ADMINISTRADOR"} },
  { path: 'gerenciar-equipamentos/:page/:size', component: GerenciarEquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-equipamentos', component: CadastrarEquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'alterar-equipamentos/:id', component: AlterarEquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'equipamentos', component: EquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'equipamentos/:page/:size', component: EquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'meus-emprestimos', component: MeusEmprestimosComponent, canActivate: [AuthGuard] },
  { path: 'meus-emprestimos/:page/:size', component: MeusEmprestimosComponent, canActivate: [AuthGuard] },
  { path: 'detalhar-equipamentos/:id', component: DetalharEquipamentosComponent, canActivate: [AuthGuard] },
  { path: 'gerenciar-colaboradores', component: GerenciarColaboradoresComponent, canActivate: [AuthGuard] },
  { path: 'gerenciar-colaboradores/:page/:size', component: GerenciarColaboradoresComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-colaboradores', component: CadastrarColaboradoresComponent, canActivate: [AuthGuard] },
  { path: 'alterar-senha', component: AlterarSenhaComponent, canActivate: [AuthGuard] },
  { path: 'alterar-colaboradores/:id', component: AlterarColaboradoresComponent, canActivate: [AuthGuard] },
  { path: 'historico-emprestimos', component: HistoricoEmprestimosComponent, canActivate: [AuthGuard] },
  { path: 'historico-emprestimos/:page/:size', component: HistoricoEmprestimosComponent, canActivate: [AuthGuard] },
  { path: 'perfil/:id', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'perfil/:id/:page/:size', component: PerfilComponent, canActivate: [AuthGuard] },
  { path: 'erro', component: AcessoNegadoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
