import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../providers/AuthProvider";
import Filters from "../components/Leaderboard/Filters";
import Leaderboard from "../components/Leaderboard/LeaderBoard";
import { dailyGameContext } from "../providers/DailyGameProvider";

const Leaderboards = () => {
  const { user } = useContext(authContext);
  const { dailyGameId } = useContext(dailyGameContext)
  const  [ leaderboardData, setLeaderboardData ] = useState(null);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [ followsDailyScores, setfollowsDailyScores ] = useState([])

  // const getLeaderboardData = (url, user) => {
  //   axios.get(`${url}users`)
  //     .then(res => {
  //       setLeaderboardData([...res.data.rows]);
  //     })
  //     .catch(err => {
  //       console.log("Error:", err);
  //     })
  // };

  // useEffect(() => {
  //   getLeaderboardData(baseUrl, user);
  // }, [baseUrl, user]);

  useEffect(() => {
    axios.get(`api/leaderboards/${user.id}/${dailyGameId}`)
      .then(r => {
        console.log(r.data)
        setfollowsDailyScores(r.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[user, dailyGameId])

  console.log(leaderboardData)

  return (
    <div>
      <Filters />
      <Leaderboard leaderboardData={leaderboardData} followsDailyScores={followsDailyScores}/>
    </div>
  );
}

export default Leaderboards;
