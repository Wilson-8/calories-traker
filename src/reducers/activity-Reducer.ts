import type { Activity } from "../types"


export type ActivityActions = 
    {type: 'Save-activity', payload: {newActivity: Activity}}


type ActivityState ={
    activities: Activity[]
}
export const initialState: ActivityState = {
    activities:[]
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
    return state
}