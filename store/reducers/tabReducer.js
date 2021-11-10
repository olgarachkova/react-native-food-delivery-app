export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
import { constants } from "../../constants";

const initialState = {
    selectedTab: constants.screens.home
}

export const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_TAB:
            return {...state, selectedTab: action.payload};
        default:
            return state;
    }
}

export const setSelectedTabSuccess = (selectedTab) => ({
    type: SET_SELECTED_TAB,
    payload: selectedTab
});