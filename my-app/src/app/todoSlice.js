

import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    todos:[{id : 1, text:"Hello world"}]
}

const todoSlice=createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo :(state,action)=>{
            
        }
    }
})
