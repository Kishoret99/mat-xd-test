import * as ToDos from './todos/reducers';

import { toDoEffects } from './todos/effects';

export const reducers = {
    todos: ToDos.reducer
}

export const effects = [toDoEffects]