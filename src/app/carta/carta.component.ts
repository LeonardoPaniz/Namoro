import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  constructor(private router: Router) {}

  retornarHome() {
    this.router.navigate(['/']);
}
}
