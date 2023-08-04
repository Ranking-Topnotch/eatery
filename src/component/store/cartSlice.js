import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        
        add(state, action) {
            const itemToAdd = action.payload;
            const itemExists = state.find(item => item.idCategory === itemToAdd.idCategory);
            console.log(state)
            console.log(action.payload)
      
            if (!itemExists) {
              state.push(itemToAdd);
            }
        },

        remove(state, action){
          return state.filter(item => item.idCategory !== action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer