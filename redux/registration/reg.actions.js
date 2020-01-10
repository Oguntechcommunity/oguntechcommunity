import RegActionTypes from './reg.types'

export const registrationSuccess = ( regCredentials ) => ({
    type: RegActionTypes.USER_REGISTRATION,
    payload: regCredentials
});