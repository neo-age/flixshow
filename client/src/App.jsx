import "./app.scss"
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch"
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./AuthContext/AuthContext"

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={user ? <Home /> : <Navigate to="/register"/>}/>
          <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}/>
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}/>
          {user && (
            <>
            <Route path='/movies' element={<Home type="movies"/>}/>
            <Route path='/series' element={<Home type="series"/>}/>
            <Route path='/watch' element={<Watch />}/>
            </>
          )}
        </Routes>
    </Router>
  )
}

export default App;
