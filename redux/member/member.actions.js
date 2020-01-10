import { MembersActionTypes } from './member.types'

export const fetchAllMembers = allMembers => ({
    type: MembersActionTypes.FETCH_MEMBERS_SUCCESS,
    payload: allMembers
})

export const fetchAllMembersFailure = error => ({
    type: MembersActionTypes.FETCH_MEMBERS_FAILURE,
    payload: error
})