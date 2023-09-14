import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AutenticarService } from '../autenticar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  /* cadastroForm!: FormGroup; */

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private autenticar: AutenticarService) { }

  ngOnInit() {
   /* this.fomulario(); */
  }

 /*  fomulario(){
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required,
      Validators.email,
      Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{3,}$")]],
      password: ['', [Validators.required,
      Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z].{8,}")]]
    });
  } */

  cadastro(form: any){
    /* this.autenticar.registrar(this.cadastroForm.value); */
    this.autenticar.registrar(form.value);
  }
  
  
 /*  get errorControl() {
    return this.cadastroForm?.controls;
  } */

/*   async registrar() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.cadastroForm?.valid) {
      const user = await this.autenticar.registrar(email, password)
    }
  } */

}
