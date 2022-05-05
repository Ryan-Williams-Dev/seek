import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false)

  // Perform login process for the user & save authID
  const login = async function(user) {
    const isAdmin = await adminCheck(user);
    if (isAdmin) setAdmin(true);
    setAuth(true);
    setUser(user);
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
    setAdmin(false);
    Cookies.remove('userId')
    window.location.reload(false);
  };

  const adminCheck = async function(user) {
    const data  = await axios.get('api/admin', {params: {userId: user.id}})
    console.log(data)
  }

  const userData = { auth, user, admin, login, logout };

  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};