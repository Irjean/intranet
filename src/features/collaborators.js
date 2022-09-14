import { createSlice } from "@reduxjs/toolkit"
import { getCollaborators } from "../services/api.service"

// Création du state et des reducers
const collaboratorSlice = createSlice({
    name: 'collaborators',
    initialState: {
        user: localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : {},
        collaborators: []
    },
    reducers: {
        setCollaborator(state, action) {
            state = {
                ...state,
                collaborators: action.payload
            }
        },
        addCollaborator(state, action) {

        },
        removeCollaborator(state, action) {

        }
    }
  }) 

export const { setCollaborator, addCollaborator, removeCollaborator } = collaboratorSlice.actions
export default collaboratorSlice.reducer

// 🦆 