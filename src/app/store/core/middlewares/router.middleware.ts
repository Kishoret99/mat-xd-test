import { Router, RouterEvent } from "@angular/router";
import { Store } from '../store';

export const routerMiddleware = (router: Router) => (store: Store) => next => action => {
    store.subscribe((state) => {
        console.log('@@@store state', state);
    })
    router.events.subscribe(e => {
        console.log('@@@router events', e);
        if(e )
        store.dispatch({type: "ROUTER ACT"})
    })
    next(action);
} 