import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menus = [
    { name: 'Menu Végétarien', description: 'Des options saines et équilibrées.', image: './assets/menu1.jpg' },
    { name: 'Menu Viande', description: 'Pour les amateurs de viande.', image: './assets/menu2.jpg' },
    { name: 'Menu Spécial', description: 'Un menu spécial chaque jour.', image: './assets/menu3.jpg' },
    { name: 'Menu Spécial', description: 'Un menu spécial chaque jour.', image: './assets/menu3.jpg' },
    { name: 'Menu Spécial', description: 'Un menu spécial chaque jour.', image: './assets/menu3.jpg' }
  ];

}
