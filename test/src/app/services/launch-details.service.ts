import { LaunchDetailsState } from "./../store/reducers/launch-details.reducer";
import { map } from "rxjs/operators";
import { LaunchDetailsGQL } from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLaunchDetails } from "../store/actions";
import * as launchDetailsQuery from "../store/selectors";
import { ApplicationState } from "../store";

@Injectable({
  providedIn: "root"
})
export class LaunchDetailsService {
  launchDetails$ = this.store.select(launchDetailsQuery.getLaunchDetails);
  launchDetailsLoading$ = this.store.select(
    launchDetailsQuery.getLaunchDetailsLoading
  );

  constructor(
    private readonly store: Store<ApplicationState>,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}

  loadLaunchDetails(id: number) {
    this.store.dispatch(
      loadLaunchDetails({
        payload: {
          id
        }
      })
    );
    return this.launchDetails$;
  }

  getLoadingStatus() {
    return this.launchDetailsLoading$;
  }

  //   pastLaunchListFacade() {
  //     return this.pastLaunchesService
  //       .fetch({ limit: 30 })
  //       .pipe(map(res => res.data.launchesPast));
  //   }
}
