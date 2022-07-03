import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
    name: "Torob",
    initialState: {
        onlineUser: {},
        wishList: []
    },
    reducers: {

        setOnlineUser: (state, actions) => {
            state.onlineUser = actions;
        }

    }
});

export const { setOnlineUser } = coinSlice.actions;

export default coinSlice.reducer;