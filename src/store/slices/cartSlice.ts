import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    details: string;
    quantity?: number | 1;
}

interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity = (existingItem.quantity || 0) + 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: (item.quantity || 0) + 1 }
                    : item
            );
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload
            );
            if (index !== -1) {
                state.items[index].quantity = Math.max(
                    (state.items[index].quantity || 0) - 1,
                    0
                );
                if (state.items[index].quantity === 0) {
                    state.items.splice(index, 1);
                }
            }
        },
    },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
    cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
