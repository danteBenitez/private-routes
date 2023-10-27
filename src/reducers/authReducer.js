export const AUTH_ACTIONS = {
    LOGIN: 'Login',
    REGISTER: 'Register',
    LOG_OUT: 'Log out'
};

export function authReducer(state, action) {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN: {
            return {
                ...state,
                currentUser: action.payload.user,
                isLogged: true
            };
        }
        case AUTH_ACTIONS.REGISTER: {
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload.user
                ],
                currentUser: action.payload.user,
                isLogged: true
            }
        }
        case AUTH_ACTIONS.LOG_OUT: {
            return {
                isLogged: false
            }
        }
        default: return state;
    }
}