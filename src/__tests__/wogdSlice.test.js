import wogdReducer, {
  getAllApplication,
  getCurrentScreen,
  getAllScreen,
  getAllZones,
  getAllMenu,
} from "../services/wogdSlice";

describe("wogdSlice reducer", () => {
  it("should handle getAllApplication", () => {
    const initialState = {
      application: [],
      currentScreen: {},
      screens: [],
      menus: [],
      zones: [],
    };

    const applicationData = ["App 1", "App 2", "App 3"];

    const nextState = wogdReducer(
      initialState,
      getAllApplication(applicationData)
    );

    expect(nextState.application).toEqual(applicationData);
  });

  it("should handle getCurrentScreen", () => {
    const initialState = {
      application: [],
      currentScreen: {},
      screens: [],
      menus: [],
      zones: [],
    };

    const screenData = { id: 1, name: "Screen 1" };

    const nextState = wogdReducer(initialState, getCurrentScreen(screenData));

    expect(nextState.currentScreen).toEqual(screenData);
  });

  it("should handle getAllScreen", () => {
    const initialState = {
      application: [],
      currentScreen: {},
      screens: [],
      menus: [],
      zones: [],
    };

    const screenData = ["Screen 1", "Screen 2", "Screen 3"];

    const nextState = wogdReducer(initialState, getAllScreen(screenData));

    expect(nextState.screens).toEqual(screenData);
  });

  it("should handle getAllZones", () => {
    const initialState = {
      application: [],
      currentScreen: {},
      screens: [],
      menus: [],
      zones: [],
    };

    const zoneData = ["Zone 1", "Zone 2", "Zone 3"];

    const nextState = wogdReducer(initialState, getAllZones(zoneData));

    expect(nextState.zones).toEqual(zoneData);
  });

  it("should handle getAllMenu", () => {
    const initialState = {
      application: [],
      currentScreen: {},
      screens: [],
      menus: [],
      zones: [],
    };

    const menuData = ["Menu 1", "Menu 2", "Menu 3"];

    const nextState = wogdReducer(initialState, getAllMenu(menuData));

    expect(nextState.menus).toEqual(menuData);
  });
});
