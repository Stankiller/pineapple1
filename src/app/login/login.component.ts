import { AuthService } from './../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  constructor(private afs: AngularFirestore, private auth: AuthService, private formbuilder: FormBuilder, private router: Router) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    this.checkForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void{
    this.auth.loginWithEmail(this.email, this.password);
    this.router.navigateByUrl('');
    // alert(this.checkForm.value);
  }

  ngOnInit(): void{
  }

}
