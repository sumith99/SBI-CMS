import { createSlice } from "@reduxjs/toolkit";

const wogdSlice = createSlice({
    name: "wogd",
    initialState: {
        application: [],
        currentScreen: {},
        screens: [],
        menus: [],
        zones: []

    },
    reducers: {
        getAllApplication: (state, action) => {
            state.application = action.payload
        },
        getCurrentScreen: (state, action) => {
            state.currentScreen = action.payload
        },
        getAllScreen: (state, action) => {
            state.screens = action.payload
        },
        getAllZones: (state, action) => {
            state.zones = action.payload
        },
        getAllMenu: (state, action) => {
            state.menus = action.payload
        }
    },
});

export default wogdSlice.reducer;
export const {
    getAllApplication,
    getCurrentScreen,
    getAllScreen,
    getAllZones,
    getAllMenu
} = wogdSlice.actions