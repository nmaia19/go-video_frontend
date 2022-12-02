import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './area-deslogada/login/login.component';
import { AlterarColaboradoresComponent } from './area-logada/admin/alterar-colaboradores/alterar-colaboradores.component';
import { AlterarEquipamentosComponent } from './area-logada/admin/alterar-equipamentos/alterar-equipamentos.component';
import {
  CadastrarColaboradoresComponent,
} from './area-logada/admin/cadastrar-colaboradores/cadastrar-colaboradores.component';
import { CadastrarEquipamentosComponent } from './area-logada/admin/cadastrar-equipamentos/cadastrar-equipamentos.component';
import {
  GerenciarColaboradoresComponent,
} from './area-logada/admin/gerenciar-colaboradores/gerenciar-colaboradores.component';
import {
  CardGerenciarEquipamentosComponent,
} from './area-logada/admin/gerenciar-equipamentos/card-gerenciar-equipamentos/card-gerenciar-equipamentos.component';
import { GerenciarEquipamentosComponent } from './area-logada/admin/gerenciar-equipamentos/gerenciar-equipamentos.component';
import { HistoricoEmprestimosComponent } from './area-logada/admin/historico-emprestimos/historico-emprestimos.component';
import { DetalharEquipamentosComponent } from './area-logada/detalhar-equipamentos/detalhar-equipamentos.component';
import { HomeComponent } from './area-logada/home/home.component';
import { AlterarSenhaComponent } from './area-logada/usuario/alterar-senha/alterar-senha.component';
import { CardEquipamentoComponent } from './area-logada/usuario/equipamentos/card-equipamento/card-equipamento.component';
import { EquipamentosComponent } from './area-logada/usuario/equipamentos/equipamentos.component';
import { MeusEmprestimosComponent } from './area-logada/usuario/meus-emprestimos/meus-emprestimos.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderBrancoComponent } from './core/header-branco/header-branco.component';
import { HeaderComponent } from './core/header/header.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';
import { ModalConfirmarExclusaoComponent } from './area-logada/modal-confirmar-exclusao/modal-confirmar-exclusao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardMeusEmprestimosComponent } from './area-logada/usuario/meus-emprestimos/card-meus-emprestimos/card-meus-emprestimos.component';
import { CardHistoricoEmprestimosComponent } from './area-logada/admin/historico-emprestimos/card-historico-emprestimos/card-historico-emprestimos.component';
import { CardGerenciarColaboradoresComponent } from './area-logada/admin/gerenciar-colaboradores/card-gerenciar-colaboradores/card-gerenciar-colaboradores.component';
import { ModalConfirmarDevolucaoComponent } from './area-logada/modal-confirmar-devolucao/modal-confirmar-devolucao.component';
import { PerfilComponent } from './area-logada/usuario/perfil/perfil/perfil.component';
import { CardPerfilComponent } from './area-logada/usuario/perfil/perfil/card-perfil/card-perfil.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ListaVaziaComponent } from './core/lista-vazia/lista-vazia.component';
import { authInterceptorProviders } from './core/helpers/auth.intercept';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TermosCondicoesComponent,
    PoliticaPrivacidadeComponent,
    LoginComponent,
    HomeComponent,
    AlterarEquipamentosComponent,
    CadastrarColaboradoresComponent,
    AlterarColaboradoresComponent,
    GerenciarEquipamentosComponent,
    GerenciarColaboradoresComponent,
    HistoricoEmprestimosComponent,
    EquipamentosComponent,
    DetalharEquipamentosComponent,
    AlterarSenhaComponent,
    MeusEmprestimosComponent,
    CadastrarEquipamentosComponent,
    CardEquipamentoComponent,
    HeaderBrancoComponent,
    CardGerenciarEquipamentosComponent,
    ModalConfirmarExclusaoComponent,
    CardMeusEmprestimosComponent,
    CardHistoricoEmprestimosComponent,
    CardGerenciarColaboradoresComponent,
    ModalConfirmarDevolucaoComponent,
    PerfilComponent,
    CardPerfilComponent,
    ListaVaziaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
