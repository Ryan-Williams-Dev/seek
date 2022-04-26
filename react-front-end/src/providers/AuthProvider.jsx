import { createContext, useState } from 'react';
import Cookies from 'js-cookie'

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  // Perform login process for the user & save authID
  const login = function(user) {
    setAuth(true);
    setUser(user);
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
    Cookies.remove('userId')
    window.location.reload(false);
  };

  const userData = { auth, user, login, logout };

  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};