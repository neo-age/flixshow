import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Url } from "../../Urls";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(()=>{
    const getNewUser = async ()=>{
      try{
        const res = await axios.get(`${Url}/api/users?new=true`, {headers:{
          token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      },})
        console.log(res.data);
        setNewUsers(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getNewUser()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user,i)=>(
          <li className="widgetSmListItem" key={i}>
          <img
            src={user.profilepic || "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
