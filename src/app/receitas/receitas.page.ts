import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  isModalOpen = false;
  receita = {
      id: 0, 
      img: "", 
      titulo:'', 
      ingredientes: "", 
      modoPreparo: ''

  }
  minhasReceitas = [
    {
      id: 1, 
      img: "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_640.jpg", 
      titulo:'Bolo de chocolate', 
      ingredientes: "Açúcar, leite, chocolate, farinha", 
      modoPreparo: 'Mistura Tudo'
    },

    {
      id: 2, 
      img: "https://cdn.pixabay.com/photo/2016/10/27/22/12/cakes-1776661_640.jpg", 
      titulo:'Bolo de morango', 
      ingredientes: "Açúcar, leite, morango, farinha", 
      modoPreparo: 'Mistura Tudo'
    },

    {
      id: 3, 
      img: "https://cozinhaglobo.com.br/wp-content/uploads/2020/11/14-bolo-fuba.jpg", 
      titulo:'Bolo de Fuba', 
      ingredientes: "Açúcar, leite, fuba, farinha", 
      modoPreparo: 'Mistura Tudo'
    }
  ]

  constructor(/* private modalControl: ModalController */) { }

  ngOnInit() {
  }

  /* async showModal(id: number){
    console.log();

    this.router.navigate(['/modal', id])
    const modal = await this.modalControl.create({
    component: ModalPage,
    componentProps:{
      
    }  
    });
    await modal.present();

    
  } */

 

  setOpen(isOpen: boolean, id: any) {
    this.isModalOpen = isOpen;
    for(let i=0; i<= this.minhasReceitas.length; i++){      

      if(id === this.minhasReceitas[i].id ){
        this.receita = this.minhasReceitas[i];
      }
      
    }

  }
}
