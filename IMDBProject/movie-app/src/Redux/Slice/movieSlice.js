import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (pageNumber) => {
        console.log("Making API call...")
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=439b69205cd908703eed7d441ac88094&page=${pageNumber}`);
        // let movies = response.data.results;
        if (!response.ok) {
            throw new Error("Failed to fetch movies....")
        }
        return response.json()
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        loading: true,
        pageNumber: 1
    },
    // state update - defined inside the slice 
    // not asynch operation
    reducers: {
        nextPageFn: (state) => {
            state.pageNumber += 1;
        },
        prevPageFn: (state) => {
            state.pageNumber -= 1;
        }
    },
    //  asynch operation
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                console.log("fulfilled...")
                console.log(action.payload)

                state.loading = false;
                state.movies = action.payload.results;
            })
            .addCase(fetchMovies.rejected, (state, dispatch) => {
                state.loading = 'false'
                console.log("rejected...")
            })
    }
})

export const { nextPageFn, prevPageFn } = movieSlice.actions;
export default movieSlice.reducer;