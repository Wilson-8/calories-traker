
import type { Activity } from "../types"


export type ActivityActions = 
    {type: 'Save-activity', payload: {newActivity: Activity}} |
    {type: 'Set-activeId', payload: {id: Activity['id']}}


export type ActivityState ={
    activities: Activity[],
    activeId: Activity['id']
}
export const initialState: ActivityState = {
    activities:[],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    if (action.type === 'Save-activity') {
        
     return{
         ...state,
         activities: [...state.activities, action.payload.newActivity]
     }
    }

    if (action.type === 'Set-activeId') {
        return{
            ...state,
            activeId: action.payload.id
        }
     }
    return state
}