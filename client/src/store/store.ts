import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./reducers/DishesSlice";
import cartReducer from "./reducers/CartSlice";

const rootReducer = combineReducers({
    dishesReducer: dishesReducer,
    cartReducer: cartReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
