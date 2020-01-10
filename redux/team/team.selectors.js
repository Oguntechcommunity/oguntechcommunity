import { createSelector } from 'reselect';

const selectTeams = state => state.allTeams;

export const selectCurrentTeam = createSelector(
    [selectTeams],
    allTeams => allTeams.teams
);