import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  async presentcalendario() {
    const actionSheet = await this.actionSheetController.create(
    {
        backdropDismiss: false,
        cssClass: 'my-custom-class',
        buttons: [

        {
          text: 'Agosto',
          icon: null,
          handler: () => {
            console.log('Delete clicked');
          }
        }, 
        {
          text: 'Setembro',
          icon: null,
          handler: () => {
            console.log('Delete clicked');
          }
        }, 
        {
          text: 'Outubro',
          icon: null,
          handler: () => {
            console.log('Delete clicked');
          }
        }, 
        {
          text: 'Novembro',
          icon: null,
          handler: () => {
            console.log('Delete clicked');
          }
        }, 
        {
          text: 'Dezembro',
          icon: null,
          handler: () => {
            console.log('Delete clicked');
          }
        }, 
        {
          text: 'Sair',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }
    );
    
    await actionSheet.present();
    
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}