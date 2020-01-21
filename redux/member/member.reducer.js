import { MembersActionTypes } from './member.types'


const INITIAL_STATE = {
    members: []
}
const memberReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MembersActionTypes.FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                members: action.payload
                
            }
            default:
                return state;
    }
}

export default memberReducer;