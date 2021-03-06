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
  const [ followsDailyScores, setfollowsDailyScores ] = useState([]);
  const [ filter, setFilter ] = useState("Total Score");

  useEffect(() => {
    document.title = 'Leaderboards | Seek'
  }, []);

  const getLeaderboardData = (url, user) => {
    axios.get(`${url}users`)
      .then(res => {
        setLeaderboardData([...res.data.rows]);
      })
      .catch(err => {

        console.log("Error:", err);
      })
  };

  useEffect(() => {
    getLeaderboardData(baseUrl, user);
  }, [baseUrl, user]);

  useEffect(() => {
    axios.get(`api/leaderboards/${user.id}/${dailyGameId}`)
      .then(r => {
        setfollowsDailyScores(r.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[user, dailyGameId]);

  return (
    <div className="leaderboard-container">
      <Filters filter={filter} setFilter={setFilter}/>
      <Leaderboard leaderboardData={leaderboardData} followsDailyScores={followsDailyScores} filter={filter}/>
    </div>
  );
}

export default Leaderboards;
