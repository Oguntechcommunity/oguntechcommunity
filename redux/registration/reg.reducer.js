import RegActionTypes from './reg.types'

const INITIAL_STATE = {
    error: null
};

const regReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case RegActionTypes.USER_REGISTRATION:

        default:
            return state;
    }
}

export default regReducer