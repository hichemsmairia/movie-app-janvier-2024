import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signup = createAsyncThunk("signup", async (body) => {
    const res = await axios.post('http://localhost:5000/api/auth/register', body)
    return res.data
})


export const signin = createAsyncThunk("signin", async (body) => {
    const res = await axios.post('http://localhost:5000/api/auth/login', body)
    return res.data
})


const authSlice = createSlice({
    name: "auth",
    initialState: {
        userInfo: {}, // les info de l'utilisateur
        userToken: null, // token jwt 
        error: null, // l'erreur
        msg: "", // le message de backend 
        success: false, // pour afficher le succes de l'operation
        loading: false
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(signup.pending, (state) => {// action.payload.error
            state.loading = true

        }),
            builder.addCase(signup.fulfilled, (state, { payload: { error, msg } }) => {// action.payload.error
                if (error) {
                    state.loading = false
                    state.error = error
                } else {
                    state.loading = false
                    state.msg = msg
                    state.success = true
                }
            })
            ,
            builder.addCase(signup.rejected, (state) => {
                state.error = "signup erreur network"
            })
            ,

            builder.addCase(signin.fulfilled, (state, { payload: { error, msg, token, user } }) => {
                if (error) {
                    state.error = error
                } else {
                    state.success = true
                    state.msg = msg
                    state.userInfo = user
                    state.token = token
                }
            }),
            builder.addCase(signin.pending, (state) => {
                state.loading = true
            }),
            builder.addCase(signin.rejected, (state) => {
                state.error = "signin erreur network"
            })
    }

})

/*
  extraReducers : {
    [signup.pending]:(state,{})=>{
        sjhgdjsdgsd
        sdhghsgdhsd
        sdhsjdh
    }
  }





*/
// export const {signup,signin} = authSlice.actions

export default authSlice.reducer

