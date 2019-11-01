import * as ToDos from './todos/reducers';
import * as Banners from './banners/reducers';

import {reducer as routerReducer} from './core/middlewares';

export const reducers = {
    todos: ToDos.reducer,
    banners: Banners.reducer,
    router: routerReducer,
};


import { toDoEffects } from './todos/effects';
import { bannersEffects } from './banners/effects';

export const effects = [toDoEffects, bannersEffects];