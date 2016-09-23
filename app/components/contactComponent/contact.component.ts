import { Component } from '@angular/core';
import { Form } from '../../classes/form';

@Component({
  moduleId:module.id,
  selector:'contact',
  templateUrl: 'contact.component.html',
  //styleUrls: 'navbar.component.css'
})
export class ContactComponent {
  name:string;
  message:string;
  email:string;
  constructor(){
    this.name     = " ";
    this.message  = " ";
    this.email    = " ";

  }

}
