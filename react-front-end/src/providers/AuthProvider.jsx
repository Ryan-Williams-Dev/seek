import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const authContext = createContext();

export default function AuthProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false)

  // Perform login process for the user & save authID
  const login = async function(email, password) {
    const params = {
      email,
      password
    }

    return axios.post(process.env.REACT_APP_API_BASE_URL + 'users', params)
      .then((res) => {
        if (!res.data.valid) {
          return alert("Incorrect credentials")
        }
        const user = res.data.user
        Cookies.set('userId', user.id, { expires: 7 })
        if (user.is_admin) setAdmin(true)
        setAuth(true);
        setUser(user);
      })
      .catch((err) => {
        console.log(err)
      })
    
  };

  const logout = function() {
    setAuth(false);
    setUser(null);
    setAdmin(false);
    Cookies.remove('userId')
    window.location.reload(false);
  };

  const userData = { auth, user, admin, login, logout };

  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};