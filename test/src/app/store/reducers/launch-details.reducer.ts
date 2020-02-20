import { createReducer, on } from "@ngrx/store";
import {
  LaunchDetailsAction,
  loadLaunchDetails,
  loadLaunchDetailsFailure,
  loadLaunchDetailsSuccess,
  loadLaunchDetailsFail
} from "../actions";

export type LaunchDetailsState = any;

const initialState: LaunchDetailsState = {
  data: null,
  loading: true,
  error: null
};

const launchDetailsReducer = createReducer(
  initialState,
  on(loadLaunchDetails, state => ({
    ...state,
    loading: true
  })),
  on(loadLaunchDetailsSuccess, (state, { payload }) => {
    return {
      ...state,
      data: payload,
      loading: false
    };
  }),
  on(loadLaunchDetailsFail, (state, { payload }) => ({
    ...initialState,
    error: payload
  }))
);

export function reducer(
  state: LaunchDetailsState | undefined,
  action: LaunchDetailsAction
) {
  return launchDetailsReducer(state, action);
}
