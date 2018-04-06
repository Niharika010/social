import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  name: any ;
  msgVal: string = '';
  isLoggedin= false;

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
    //this.items = afDB.list('/messages', ref => ref.limitToLast(50)).valueChanges();
    this.name = 'Click Login';
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.name = null;
        return;
      }
      this.name = user.displayName;
      this.isLoggedin =true;
    });
  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log(res));
  }

  signInWithGithub(){
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(res => console.log(res));
  }
  signInWith(){

  }
  signOut() {
    this.name = 'Click Login';
    this.isLoggedin= false;
    this.afAuth.auth.signOut();
    
  }
 Register(){

 }
  
  Send(desc: string) {
    //this.items.push({})
  }

}
