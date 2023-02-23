import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 public Titulo:string = "Curso basico de Angular Yunior";
 public image:string="https://www.pragma.com.co/hs-fs/hubfs/logo_pequenin-2.png?width=207&name=logo_pequenin-2.png";
}
