import { createContext, useState } from 'react';
import axios from 'axios';

export const dailyGameContext = createContext();

export default function AuthProvider(props) {
  const [ dailyGameId, setDailyGameId ] = useState(null)

  const initDailyGameId = () => {
    return axios.get('api/fetch/dailyGameId')
      .then(res => {
        console.log(res.data.gameId)
        return setDailyGameId(res.data.gameId)
      })
  }

  // authContext will expose these items
  const dailyGameIdData = { dailyGameId, initDailyGameId };

  // We can use this component to wrap any content we want to share this context
  return (
    <dailyGameContext.Provider value={dailyGameIdData}>
      {props.children}
    </dailyGameContext.Provider>
  );
};