import {
  createStore, 
  combineReducers, 
  applyMiddlewares,
  APP_STATE
} from './store/core';

import {
  devToolsMiddleware,
  loggerMiddleware,
  effectsMiddleware,
  storageMiddleware,
  SAVED_APP_STATE
} from './store/core/middlewares';

import { reducers, effects } from './store/reducer';
import { Provider } from '@angular/core';
import { Storage } from '@ionic/storage';


function createStoreFactory(storage: Storage, savedState) {
  const initialState =  savedState ||  {
    todos: []
  };

  const store =  createStore(
    combineReducers(reducers),
    initialState, 
    applyMiddlewares( storageMiddleware(storage), loggerMiddleware, devToolsMiddleware({}), effectsMiddleware(...effects))
    )
  return store;  
}

export const appStateProvider: Provider = {provide: APP_STATE, useFactory: createStoreFactory, deps: [Storage, SAVED_APP_STATE]}