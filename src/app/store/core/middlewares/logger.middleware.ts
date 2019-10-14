export const loggerMiddleware = store => next => action => {
    console.log('LOGGER', action);
    next(action);
}