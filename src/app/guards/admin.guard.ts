import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminService } from '../services/admin.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public auth: AngularFireAuth,
    public _adminS: AdminService,
    public _userS:UserService,
    public route:Router) { }

  canActivate(): boolean {
    if(this._userS.isLoggedIn){
      const usuario = JSON.parse(localStorage.getItem('user'));
      if(this._adminS.EMAIL_ADMIN.includes(usuario.email)){
        return true
      }
      
    }
    return false;
  }
  
}
