import * as ToDos from './todos/reducers';
import * as Banners from './banners/reducers';


import { toDoEffects } from './todos/effects';
import { bannersEffects } from './banners/effects';

export const reducers = {
    todos: ToDos.reducer,
    banners: Banners.reducer
}

export const effects = [toDoEffects, bannersEffects]