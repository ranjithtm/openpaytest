import { createAction, props } from "@ngrx/store";

export const loadLaunchDetails = createAction(
  "[Launch] Load launch details",
  props<{ payload: { id: number } }>()
);

export const loadLaunchDetailsSuccess = createAction(
  "[Launch] Load Launch details Success",
  props<{ payload: any[] }>()
);

export const loadLaunchDetailsFailure = createAction(
  "[Launch] Load Launch details Fail",
  props<{ payload: any }>()
);

export type LaunchDetailsAction =
  | typeof loadLaunchDetails
  | typeof loadLaunchDetailsSuccess
  | typeof loadLaunchDetailsFailure;
