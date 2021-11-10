import { setSelectedTabSuccess } from "../reducers/tabReducer";

export const setSelectedTab = (selectedTab) => {
    return (dispatch) => {
        dispatch(setSelectedTabSuccess(selectedTab));
    }
}