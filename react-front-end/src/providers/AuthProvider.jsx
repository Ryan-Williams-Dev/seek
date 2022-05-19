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

  const register = async function(userData) {
    if (userData.password !== userData.passwordConfirmation) {
      alert("Password and password confirmation did not match.")
    }

    return axios.post('users/new', userData)
      .then(r => {
        if (r.data.severity === 'ERROR') {
          return alert(r.data.detail)
        }
        login(userData.email, userData.password)
      })
      .catch(err => {
        alert(err)
      })
    
  }

  const logout = function() {
    setAuth(false);
    setUser(null);
    setAdmin(false);
    Cookies.remove('userId')
    window.location.reload(false);
  };

  const userData = { auth, user, admin, login, logout, register };

  return (
    <authContext.Provider value={userData}>
      {props.children}
    </authContext.Provider>
  );
};