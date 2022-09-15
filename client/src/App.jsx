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

function App() {
  const userauth = true
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={userauth ? <Home /> : <Navigate to="/register"/>}/>
          <Route path='/register' element={!userauth ? <Register /> : <Navigate to="/" />}/>
          <Route path='/login' element={!userauth ? <Login /> : <Navigate to="/" />}/>
          {userauth && (
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
