import { Component } from '@angular/core';
import { AutenticarService } from '../autenticar.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private autenticar: AutenticarService
  ){}

  logar(form: any){
    this.autenticar.login(form.value);
    this.autenticar.getAuth().onAuthStateChanged(user => {
      if(user) console.log(user.email);      
    })
    
  }
    
    
  
}
