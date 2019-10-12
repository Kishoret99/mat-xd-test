import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { flatMap } from 'rxjs/operators';

export const APP_STATE_KEY = 'APP_STATE'
export class CurrentlyPlaying {
  songName: string;
  movieName: string;
  singerDetails: string;
}
export class State {
  currentlyPlaying: CurrentlyPlaying;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _state: BehaviorSubject<State>;

  constructor(
    private storage: Storage
  ) { 

  }

  get state(): Observable<State> {
    if(!this._state) {
      return from(this.storage.get(APP_STATE_KEY)).pipe(flatMap((persistedState: State) => {
        if(!persistedState) {
          const initialState: State = new State(); 
          this._state = new BehaviorSubject(initialState);
          this.storage.set(APP_STATE_KEY, initialState);
          return this._state.asObservable();
        };
        this._state = new BehaviorSubject(persistedState);
        return this._state.asObservable();
      }))
    }
    return this._state.asObservable();
  }

  public set currentlyPlaying(currentlyPlaying: CurrentlyPlaying) {
    const oldState = this.getMemoizedState();
    const newState: State = {...oldState, currentlyPlaying};
    this.updateState(newState);
  }


  private getMemoizedState(): State {

    if(!this._state) {
      const initialState: State = new State(); 
      this._state = new BehaviorSubject(initialState);
    }

    const state = this._state.getValue();
    return state;
  }

  private updateState(state: State) {
    this._state.next(state);
    this.storage.set(APP_STATE_KEY, state);
  }
}
