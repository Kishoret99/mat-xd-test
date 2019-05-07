import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { flatMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private store: Map<String, BehaviorSubject<any>> = new Map();
  private initialValues = {
    cart: 0
  }

  constructor(
    private storage: Storage
  ) { 

  }

  subscribe(key): Observable<any> {
    
    if(!this.store.has(key)) {
      return from(this.storage.get(key)).pipe(flatMap(value => {
        if(value == null) value = this.initialValues[key];
        this.store.set(key, new BehaviorSubject(value));
        return this.store.get(key).asObservable()
      }));
    }

    return this.store.get(key).asObservable();
  }

  publish(key, value) {

    if(!this.store.has(key)) {
      this.store.set(key, new BehaviorSubject(value));
      this.storage.set(key, value);
    }

    this.store.get(key).next(value);
    this.storage.set(key, value);
  }
}
