import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogComponent } from '../log/log.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserAdmin:boolean = false;
  isLogged;
  isAdminLogged;
  constructor(public dialog: MatDialog,
    public _userS: UserService) { 
      
    }

  ngOnInit(): void {
    this.isLogged = this._userS.isLoggedIn;
    this._userS.isAdmin()
    
    if(this._userS.isAdmin()){
      this.isAdminLogged = true;
    }else{
      this.isAdminLogged = false;
    }
    
  }

  abrirDialogLog() {
    const dialogRef = this.dialog.open(LogComponent);
    dialogRef.afterClosed().subscribe(
      resp => this.ngOnInit()
    )
    
  }

  signOut() {
    this._userS.signOut().then(
      resp => this.ngOnInit()
    );
    
  }
}
