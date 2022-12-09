import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-colaboradores',
  templateUrl: './cadastrar-colaboradores.component.html',
  styleUrls: ['./cadastrar-colaboradores.component.css']
})
export class CadastrarColaboradoresComponent {
  constructor(private service: UsuarioService, private toastr: ToastrService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  cadastrarColaborador(dados: any) {
    this.service.cadastrar(dados).subscribe(
      (data:any) => {
        this.router.navigate(['/cadastrar-colaboradores'])
        this.toastr.success("Colaborador cadastrado")
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Erro:')
      }
    )
  }

  validate(event:Event, dados: any){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    else{
      form.classList.remove('was-validated');
      this.cadastrarColaborador(dados)
    }

  }
}
