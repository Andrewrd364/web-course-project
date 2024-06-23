import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartStorage } from "../../services/CartService";

interface CartState {
    quantityDishesInCart: number;
}

const initialState: CartState = {
    quantityDishesInCart: cartStorage.getTotalQuantity(),
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Редюсер для получения количества продуктов в корзине
        getQuantity: (state) => {
            return state;
        },
        // Редюсер для изменения количества продуктов в корзине
        setQuantity: (state, action: PayloadAction<number>) => {
            state.quantityDishesInCart = action.payload;
        },
        // Редюсер для увеличения количества продуктов на 1
        incrementQuantity: (state) => {
            state.quantityDishesInCart += 1;
        },
        // Редюсер для уменьшения количества продуктов на 1
        decrementQuantity: (state) => {
            if (state.quantityDishesInCart > 0) {
                state.quantityDishesInCart -= 1;
            }
        },
    },
});

export default CartSlice.reducer;
