import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const hasAccess = localStorage.getItem('chave') === 'true';

    if (hasAccess) {
      return true; // Permite o acesso à rota
    } else {
      this.router.navigate(['/acesso-negado']); // Redireciona para uma rota de acesso negado
      return false; // Impede o acesso à rota
    }
  }
}
