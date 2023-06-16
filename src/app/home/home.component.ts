import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private router: Router) {}
  senhaFornecida: string = '';

   conferirSenha(): void {
    console.log("olha a senha:", this.senhaFornecida);
    const senhaCorreta: string = "2022-09-17";


    if (this.senhaFornecida === senhaCorreta) {
      localStorage.setItem('chave', JSON.stringify(true));
      this.router.navigate(['/carta']);
    } else {
      alert("Meu deus amorzinho, dica coloca no seguinte formato 00/00/0000 \n te amo amor, tenta de novo.");
    }
  }
}
