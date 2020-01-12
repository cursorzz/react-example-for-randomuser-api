import reducer from "../../src/reducers/users";
import * as actions from "../../src/actions/users";

const payload = [{ user: 1 }];

describe("users reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      page: 0,
      error: "",
      users: []
    });
  });
  it("should handle FETCH_USERS_SUCCESS", () => {
    expect(
      reducer([], {
        type: actions.FETCH_USERS_SUCCESS,
        payload: payload,
        page: 2
      })
    ).toEqual({
      loading: false,
      page: 2,
      users: payload
    });
  });
});
