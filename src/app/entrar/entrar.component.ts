
import { Router } from '@angular/router';
import { UsuarioLogin } from './../model/UsuarioLogin';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

   entrar(){
     this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
       this.usuarioLogin = resp

       environment.token = this.usuarioLogin.token
       this.router.navigate(['/start'])
     })
   }

}
