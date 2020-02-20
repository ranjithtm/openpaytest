import { TestBed } from "@angular/core/testing";

import { LaunchFacadeService } from "./launch-facade.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { GraphQLModule } from "../graphql.module";
import { provideMockStore } from "@ngrx/store/testing";

class MockLaunchFacadeService extends LaunchFacadeService {}

describe("LaunchFacadeService", () => {
  let injector: TestBed;

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, GraphQLModule],
      providers: [provideMockStore({})]
    });
  });

  it("should be created", () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
