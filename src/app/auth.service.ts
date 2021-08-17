import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authstate: any = null;

  constructor(private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe(auth => {
      this.authstate = auth;
    });
  }

  registerWithEmail(email: string, password: string): any{
    this.afu.createUserWithEmailAndPassword(email, password).then((user) => {
      this.authstate = user;
      alert(this.authstate);
    }).catch(error => {
      console.log(error);
      throw error;
    });
  }

  loginWithEmail(email: string, password: string): void{
    this.afu.signInWithEmailAndPassword(email, password).then((user) => {
      this.authstate = user;
    }).catch(error => {
      console.log(error);
      throw error;
    });
  }

  signout(): void{
    this.afu.signOut();
    this.router.navigateByUrl('');
  }
}
