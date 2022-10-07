import { Component } from '@angular/core';
import { Usuario } from './shared/model/usuario';
import { UsuarioService } from './shared/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarios: Array<Usuario>;

  constructor(private usuarioService: UsuarioService){
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void{
    this.usuarioService.listar().subscribe(
      it => {
        this.usuarios = it;
      }
    )
  }
}
