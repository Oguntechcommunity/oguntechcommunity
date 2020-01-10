import { TeamActionTypes } from './team.types'

export const fetchAllTeams = allTeams => ({
    type: TeamActionTypes.FETCH_TEAMS_SUCCESS,
    payload: allTeams
})

export const fetchAllTeamsFailure = error => ({
    type: TeamActionTypes.FETCH_TEAMS_FAILURE,
    payload: error
})