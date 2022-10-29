import "./App.css";
import { useContext } from "react";
import { deviceType } from 'react-device-detect';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminList from "./pages/adminList/AdminList";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ShowList from "./pages/showList/showList";
import Show from "./pages/show/show";
import NewShow from "./pages/newShow/Newshow";
import Listofshows from "./pages/listOfShows/ListOfShows";
import List from "./pages/list/list";
import NewList from "./pages/newLIst/NewList";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  console.log(deviceType)
  const {admin} = useContext(AuthContext);
  if(deviceType === "browser"){
  return admin ? (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={admin ? (
                <Navigate replace to="/"/>
              ) : (
                <Dashboard />
              )}/>
          <Route exact path="/" element={<Dashboard />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/admins" element={<AdminList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path="/showList" element={<ShowList />}/>
          <Route path="/show/:showid" element={<Show />}/>
          <Route path="/newshow" element={<NewShow />}/>
          <Route path="/lists" element={<Listofshows />}/>
          <Route path="/list/:listid" element={<List />}/>
          <Route path="/NewList" element={<NewList />}/>
        </Routes>
      </div>
    </Router>
  ) : (
    <Router>
        <Routes>
          <Route exact path="/" element={admin ? (
              <Dashboard />
            ) : (
              <Navigate replace to="/login"/>
              
            )}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  )
    }else if (deviceType === "mobile") {
      return (
          <>
          <h1>This is rendered only on mobile</h1>
          </>
      )
    }else if(deviceType === "tablet") {
      return (
          <>
          <h1>This is rendered only on tablet</h1>
          </>
      )
    }
}

export default App;
