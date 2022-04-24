import axios from "axios";
import { useContext, useEffect } from "react";
import { authContext } from "../providers/AuthProvider";
import Filters from "../components/Leaderboard/Filters";
import Leaderboard from "../components/Leaderboard/LeaderBoard";

const Leaderboards = () => {
  const { user } = useContext(authContext);

  const baseUrl = process.env.REACT_APP_API_BASE_URL
  const getLeaderboardData = (user) => {
    axios.get(`${baseUrl}users`)
      .then(res => {
        // console.log("getLeaderboardData response:", res)
      })
      .catch(err => {
        console.log("Error:", err);
      })
  }

  useEffect(() => {
    getLeaderboardData(user)
  }, []);

  return (
    <div>
      <Filters />
      <Leaderboard />
    </div>
  );
}

export default Leaderboards;
