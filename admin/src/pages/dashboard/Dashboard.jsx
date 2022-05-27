import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Dashboard.css";
//import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function Dashboard() {
  const MONTHS = useMemo (()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )
  const [userStats, setUserStats] = useState([])

  useEffect(()=>{
    const getStats = async ()=>{
      try {
        const res = await axios.get("users/stats/", {headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmQ5OTM4M2E2MWZkNjA3NGNhNmM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzE1NTkwMCwiZXhwIjoxNjQ3NTg3OTAwfQ.oFiLKJftow99c3gcCfkrg4MfoGNrC-PUnoK3AmKYwOc"}})
            //console.log(res.data);
            const statsList = res.data.sort(function(a, b){
              return a._id - b._id
            })
            statsList.map(item=>setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User":item.total}]))
          }catch(err){
            console.log(err);
        }
    }
    getStats()
  },[MONTHS])

  //console.log(userStats)

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
