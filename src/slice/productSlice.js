import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({
    name: 'PRODUCT_DETAILS',
    initialState: {
        productList: [],
    }
})