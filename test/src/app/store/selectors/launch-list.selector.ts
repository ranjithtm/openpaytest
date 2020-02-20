import { ApplicationState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getLaunchListState = createFeatureSelector<ApplicationState>(
  "launchList"
);

export const getLaunchList = createSelector(
  getLaunchListState,
  (state: any) => {
    return state.data;
  }
);

export const getLaunchListLoading = createSelector(
  getLaunchListState,
  (state: any) => {
    return state.loading;
  }
);
