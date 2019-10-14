import { Effect, actions$, ofType } from '../core/middlewares';
import * as BANNERS_ACTIONS from './constants';
import * as BANNERS_ACTIONS_CREATORS from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { timer, of, throwError } from 'rxjs';

class BannersService {
    getBanners() {
        const banners = [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
        // return timer(2000).pipe(map(() => BANNERS_ACTIONS_CREATORS.getBannersSuccessAction(banners)))
        // return timer(2000).pipe(map(() => {throw 'error'}));
        return throwError({msg: 'hello'})
    }
}

class BannersEffects {
    bannerRequest: any;
    constructor(bannerService, _actions$) {
        this.bannerRequest = Effect({})(
            _actions$
                .pipe(
                    ofType(BANNERS_ACTIONS.GET_BANNERS_REQUEST),
                    mergeMap(() => bannerService.getBanners().pipe(
                        catchError(err => of(BANNERS_ACTIONS_CREATORS.getBannerFailureAction({msg: 'hello'})))
                    ))
                    )
          );
    }
}

export const bannersEffects = new BannersEffects(new BannersService(), actions$)
