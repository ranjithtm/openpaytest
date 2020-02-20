import {
  LaunchDetailsGQL,
  PastLaunchesListGQL
} from "../../services/spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  loadLaunchDetails,
  loadLaunchDetailsFailure,
  loadLaunchDetailsSuccess
} from "../actions/launch.details.action";

import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class LaunchDetailsEffect {
  constructor(
    private actions$: Actions,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}

  loadLaunchList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLaunchDetails),
      switchMap(payload =>
        this.launchDetailsService
          .fetch({ id: payload.payload.id.toString() })
          .pipe(
            map((response: any) => {
              return loadLaunchDetailsSuccess({
                payload: response.data.launch as any
              });
            }),
            catchError(error => {
              return of(loadLaunchDetailsFailure(error));
            })
          )
      )
    )
  );
}
