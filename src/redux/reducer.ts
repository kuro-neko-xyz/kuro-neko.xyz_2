import type { Reducer } from "@reduxjs/toolkit";
import { TOGGLE_SCREEN } from "./constants";
import type { Action, State } from "./models";
import initialState from "./initialState";

const reducer: Reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLE_SCREEN:
      return { ...state, showScreen: !state.showScreen };
    default:
      return state;
  }
};

export default reducer;
