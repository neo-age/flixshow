import "./App.css";
import { useContext } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Dashboard from "./pages/dashboard/Dashboard";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ShowList from "./pages/showList/showList";
import Show from "./pages/show/show";
import NewShow from "./pages/newShow/Newshow";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return user ? (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={user ? (
                <Navigate replace to="/"/>
              ) : (
                <Dashboard />
              )}/>
          <Route exact path="/" element={<Dashboard />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path="/showList" element={<ShowList />}/>
          <Route path="/show/:showid" element={<Show />}/>
          <Route path="/newshow" element={<NewShow />}/>
        </Routes>
      </div>
    </Router>
  ) : (
    <Router>
        <Routes>
          <Route exact path="/" element={user ? (
              <Dashboard />
            ) : (
              <Navigate replace to="/login"/>
              
            )}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default App;
