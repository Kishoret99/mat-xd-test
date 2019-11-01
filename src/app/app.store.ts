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
  SAVED_APP_STATE,
  routerMiddleware
} from './store/core/middlewares';

import { reducers, effects } from './store/reducer';
import { Provider } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


function createStoreFactory(
  storage: Storage,
  savedState,
  router: Router
  ) {
  const initialState =  savedState ||  {
    todos: []
  };

  const store =  createStore(
    combineReducers(reducers),
    initialState,
    applyMiddlewares(
      routerMiddleware(router, true),
      storageMiddleware(storage),
      loggerMiddleware,
      devToolsMiddleware({}),
      effectsMiddleware(...effects))
    );
  return store;
}

export const appStateProvider: Provider = {provide: APP_STATE, useFactory: createStoreFactory, deps: [Storage, SAVED_APP_STATE, Router]};