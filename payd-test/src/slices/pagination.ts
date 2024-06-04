import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
    currentPage: number;
    postsPerPage: number;
    totalPosts: number;
}

const initialState: PaginationState = {
    currentPage: 1,
    postsPerPage: 10,
    totalPosts: 0,
}

const PaginationSlice = createSlice({
    name: "paginationslice",
    initialState,
    reducers: {
        updatePageNumber: ((state, { payload }) => {
            state.currentPage = payload;
        }),
        updatePostsPerPage: ((state, { payload }) => {
            state.postsPerPage = payload;
        }),
        updateTotalPosts: ((state, { payload }) => {
            state.totalPosts = payload;
        })
    }
});

export default PaginationSlice.reducer
export const { updatePageNumber, updatePostsPerPage, updateTotalPosts } = PaginationSlice.actions