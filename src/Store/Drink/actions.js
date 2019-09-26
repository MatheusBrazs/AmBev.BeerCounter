import { createActions, createReducer, Types as ReduxSauceTypes } from 'reduxsauce';
import { defaultState } from './drink-model';

const defaultHandler = (state) => ({ ...state });

export function added(state) {
    return { ...state, countDrinks: state.countDrinks + 1 };
}

export function reset(state) {
    return { ...state, countDrinks: 0 };
}

export const { Types, Creators } = createActions({
    drinksCount: [],
    drinksResetCount: [],
})

export default createReducer(defaultState, {
    [ReduxSauceTypes.DEFAULT]: defaultHandler,
    [Types.DRINKS_COUNT]: added,
    [Types.DRINKS_RESET_COUNT]: reset,
})
