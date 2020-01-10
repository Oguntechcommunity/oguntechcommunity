import { createSelector } from 'reselect';

const selectMembers = state => state.allMembers;

export const selectCurrentMember = createSelector(
    [selectMembers],
    allMembers => allMembers.members
);