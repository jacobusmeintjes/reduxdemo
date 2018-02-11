/*
Import createSelector from reselect to make selection of different parts of the state fast and efficient
*/
import { createSelector } from 'reselect';

/*
Import the store logger to log all the actions to the console
*/
import { storeLogger } from 'ngrx-store-logger';

/*
Import the layout state
*/
import * as fromLayout from './layout/layout.reducer';
import { compose } from '@ngrx/core';
import { combineReducers, Action } from '@ngrx/store';

export interface AppState {
  reducer: {
    layout: fromLayout.State;
  };
}

export const reducers = {
  layout: fromLayout.reducer
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(
  reducers
);

export function metaReducer(state: any, action: any) {
    return developmentReducer(state, action);
}


/*
Layout selector
*/
export const getLayoutState = (state: AppState) => state.reducer.layout;

export const getLayoutOpenedModalName = createSelector(getLayoutState, fromLayout.getOpenedModalName); //(state: AppState) => state.reducer.layout.openedModalName;
