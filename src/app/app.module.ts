import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TermosCondicoesComponent } from './core/termos-condicoes/termos-condicoes.component';
import { PoliticaPrivacidadeComponent } from './core/politica-privacidade/politica-privacidade.component';
import { LoginComponent } from './area-deslogada/login/login.component';
import { HomeComponent } from './area-logada/home/home.component';
import { AlterarEquipamentosComponent } from './area-logada/admin/alterar-equipamentos/alterar-equipamentos.component';
import { CadastrarColaboradoresComponent } from './area-logada/admin/cadastrar-colaboradores/cadastrar-colaboradores.component';
import { AlterarColaboradoresComponent } from './area-logada/admin/alterar-colaboradores/alterar-colaboradores.component';
import { GerenciarEquipamentosComponent } from './area-logada/admin/gerenciar-equipamentos/gerenciar-equipamentos.component';
import { GerenciarColaboradoresComponent } from './area-logada/admin/gerenciar-colaboradores/gerenciar-colaboradores.component';
import { HistoricoEmprestimosComponent } from './area-logada/admin/historico-emprestimos/historico-emprestimos.component';
import { EquipamentosComponent } from './area-logada/usuario/equipamentos/equipamentos.component';
import { DetalharEquipamentosComponent } from './area-logada/detalhar-equipamentos/detalhar-equipamentos.component';
import { AlterarSenhaComponent } from './area-logada/usuario/alterar-senha/alterar-senha.component';
import { MeusEmprestimosComponent } from './area-logada/usuario/meus-emprestimos/meus-emprestimos.component';
import { HeaderBrancoComponent } from './core/header-branco/header-branco.component';

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
    HeaderBrancoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
