import { AuthService } from './../auth.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface Item { name: string; }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  checkForm;

  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  padding = '';

  constructor(private afs: AngularFirestore, private auth: AuthService, private formbuilder: FormBuilder,
    private router: Router, private breakpointObserver: BreakpointObserver) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    this.checkForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void{
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)){
      this.auth.loginWithEmail(this.email, this.password).then(() => {
        alert('登入成功');
        this.router.navigateByUrl('');
      }).catch((error: any) => {
        this.error = error;
       });
    }
  }

  validateForm(email: string, password: string): boolean{
    if (email.length === 0){
      this.errorMessage = '請輸入 Email';
      return false;
    }else if (password.length === 0){
      this.errorMessage = '請輸入密碼';
      return false;
    }else if (password.length < 8){
      this.errorMessage = '密碼長度不可小於 8 碼';
      return false;
    }else{
      this.errorMessage = '';
      return true;
    }
  }

  clearErrorMessage(): void{
    this.errorMessage = '';
    this.error = {name : '', message : ''};
  }
  ngOnInit(): void{
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    console.log(isSmallScreen);
    if(isSmallScreen === true){
      this.padding = '2vh';
    }else{
      this.padding = '10vh'
    }
  }

}
