import { createContext, useReducer} from "react";
import { AUTH_ACTIONS, authReducer } from "../reducers/authReducer";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [auth, dispatch] = useReducer(authReducer, {
    isLogged: false
  });

  const login = (username, email) => {
    dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: {
            username,
            email
        }
    })
  }

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
}