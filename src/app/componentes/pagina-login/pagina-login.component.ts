import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {

  loginForm!: FormGroup
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      correo:[''],
      contra:['']
    })
  }

  login(){
      const user = this.loginForm.value.correo === 'admin@gmail.com' && this.loginForm.value.contra === '12345';
      if (user){
        alert("Se ha logueado exitosamente");
        localStorage.setItem('token', JSON.stringify(this.loginForm.value.correo));
        this.loginForm.reset();
        this.router.navigate(['inicio']);
      }
      else{
        alert("Usuario incorrecto");
      }
    }

}
