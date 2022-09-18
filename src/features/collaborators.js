import { createSlice } from "@reduxjs/toolkit"

// Création du state et des reducers
const collaboratorSlice = createSlice({
    name: 'collaborators',
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
        collaborators: [],
    },
    reducers: {
        setCollaborator(state, action) {
            state = {
                ...state,
                collaborators: action.payload
            }
            return state
        },
        addCollaborator(state, action) {
            
        },
        removeCollaborator(state, action) {

        },
        addUser(state, action) {
            state = {
                ...state,
                user: action.payload
            }
            return state
        },
        removeUser(state, action) {
            state = {
                ...state,
                user: {}
            }
            return state
        },
    }
  }) 

export const { setCollaborator, addCollaborator, removeCollaborator, addUser, removeUser } = collaboratorSlice.actions
export default collaboratorSlice.reducer

// 🦆 