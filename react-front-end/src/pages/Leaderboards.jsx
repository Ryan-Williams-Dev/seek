import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../providers/AuthProvider";
import Filters from "../components/Leaderboard/Filters";
import Leaderboard from "../components/Leaderboard/LeaderBoard";

const Leaderboards = () => {
  const { user } = useContext(authContext);
  const  [ leaderboardData, setLeaderboardData ] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

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
  }, []);

  return (
    <div>
      <Filters />
      <Leaderboard leaderboardData={leaderboardData}/>
    </div>
  );
}

export default Leaderboards;
