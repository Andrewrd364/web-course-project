import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDish } from "../../models/IDish";
import { ICategory } from "../../models/ICategory";
import DishService from "../../services/DishService";
import CategoryService from "../../services/CategoryService";

interface DishesState {
    dishes: IDish[] | null;
    categories: ICategory[] | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: DishesState = {
    dishes: null,
    categories: null,
    isLoading: false,
    error: null,
};

export const brigadesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchDishes.fulfilled.type,
                (state, action: PayloadAction<IDish[]>) => {
                    state.isLoading = false;
                    state.error = null;
                    state.dishes = action.payload;
                }
            )
            .addCase(fetchDishes.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchDishes.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )

            .addCase(
                fetchCategories.fulfilled.type,
                (state, action: PayloadAction<ICategory[]>) => {
                    state.isLoading = false;
                    state.error = null;
                    state.categories = action.payload;
                }
            )
            .addCase(fetchCategories.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchCategories.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            );
    },
});

export const fetchDishes = createAsyncThunk(
    "dishes/fetchDishes",
    async (_, thunkAPI) => {
        try {
            const response = await DishService.getAll();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                "Не удалось загрузить данные блюд"
            );
        }
    }
);

export const fetchCategories = createAsyncThunk(
    "dishes/fetchCategories",
    async (_, thunkAPI) => {
        try {
            const response = await CategoryService.getAll();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                "Не удалось загрузить данные категорий"
            );
        }
    }
);

export default brigadesSlice.reducer;
