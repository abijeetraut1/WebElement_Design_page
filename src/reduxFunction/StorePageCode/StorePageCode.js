import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit";

const pageStorage = createSlice({
    name: "pages",
    initialState: {
        home: [],
        about: [],
        contact: [],
        login: []
    },
    reducers: {
        storeHomePage: (state, action) => {
            const {
                name,
                html,
                css,
                slug
            } = action.payload;
            const homePageDataObj = {
                id: nanoid(),
                name,
                html,
                css,
                slug
            }

            console.log(homePageDataObj);
            state.home.push(homePageDataObj);
        }
    }
})

export const {storeHomePage} = pageStorage.action;
export default pageStorage.action;
