import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Accessibility,
} from "@material-ui/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./user.css";

export default function User() {
  const location = useLocation();
  const user = location.state;
  let s = user.createdAt;
  let d = new Date(Date.parse(s));

  // this logs for me 
  // "Fri Jul 08 2005 13:22:33 GMT+0200 (Central European Summer Time)" 
  // and something else for you

  //console.log(d.toString()) 

  // this logs
  // Fri, 08 Jul 2005 11:22:33 GMT
  // for everyone

  //console.log(d.toUTCString())

  //radio form input
  const [userStatis, setUserStatis] = useState("Male");

  function onChangeValue(event) {
    setUserStatis(event.target.value);
    console.log(event.target.value);
  }


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={user.profilepic}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{d.toUTCString()}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <Accessibility className="userShowIcon" />
              <span className="userShowInfoTitle">{user.isAdmin ? "this user is an admin" : "this user is not an admin"}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>User Statis</label>
                <div onChange={onChangeValue}>
                  <input type="radio" value="true" name="gender" defaultChecked /> admin
                  <input type="radio" value="false" name="gender" /> not admin
                </div>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={user.profilepic}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
