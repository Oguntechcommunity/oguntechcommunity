import { combineReducers } from 'redux'

import regReducer from './registration/reg.reducer'
import memberReducer from './member/member.reducer'
import teamReducer from './team/team.reducer'

export default combineReducers({
    registration: regReducer,
    allMembers: memberReducer,
    allTeams: teamReducer
});