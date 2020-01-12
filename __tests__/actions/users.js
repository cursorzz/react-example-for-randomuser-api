import * as actions from "../../src/actions/users";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mock = new MockAdapter(axios);

const payload = [{ id: 1, name: "John Smith" }];

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("https://randomuser.me/api/").reply(200, {
  results: payload
});

describe("async actions", () => {
  it("create FETCH_USERS_SUCCESS when fetching users finish", () => {
    const page = 1;
    const expectedActions = [
      {
        type: actions.FETCH_USERS_LOADING
      },
      {
        type: actions.FETCH_USERS_SUCCESS,
        payload,
        page
      }
    ];
    const store = mockStore({ users: [] });
    return store.dispatch(actions.fetchUsers(page)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
