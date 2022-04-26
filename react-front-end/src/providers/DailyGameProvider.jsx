import { createContext, useState } from 'react';
import axios from 'axios';

export const dailyGameContext = createContext();

export default function AuthProvider(props) {
  const [ dailyGameId, setDailyGameId ] = useState(null)

  const initDailyGameId = () => {
    return axios.get('api/fetch/dailyGameId')
      .then(res => {
        return setDailyGameId(res.data.gameId)
      })
  }

  const dailyGameIdData = { dailyGameId, initDailyGameId };

  return (
    <dailyGameContext.Provider value={dailyGameIdData}>
      {props.children}
    </dailyGameContext.Provider>
  );
};