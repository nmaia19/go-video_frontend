import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-alterar-colaboradores',
  templateUrl: './alterar-colaboradores.component.html',
  styleUrls: ['./alterar-colaboradores.component.css']
})
export class AlterarColaboradoresComponent {
  usuarios: any = []

  constructor(private service: UsuarioService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    var routeParams = this.route.snapshot.paramMap
    let id = parseInt(routeParams.get('id') || '')
    this.service.consultarPorId(id).subscribe(data => this.usuarios = data)
   }

  alterarNomeColaborador(id:number, dados: any) {
    this.service.alterarNome(id, dados).subscribe(
      (data:any) => {
        this.toastr.success("Nome do colaborador alterado")
        this.router.navigate(['/gerenciar-colaboradores'])
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Erro:')
      }
    )
  }

  resetarSenha(id:number) {
    this.service.resetarSenha(id).subscribe(
      (data:any) => {
        this.toastr.success("A senha do colaborador foi redefinida")
        this.router.navigate(['/gerenciar-colaboradores'])
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Erro:')
      }
    )
  }

  validate(event:Event, id: number, dados: any){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    else{
      this.alterarNomeColaborador(id,dados)
      form.classList.remove('was-validated');
    }
  }

}
