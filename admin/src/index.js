import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/authContext/AuthContext";
import {MovieContextProvider} from "./context/movieContext/MovieContext";
import {ListContextProvider} from "./context/listContext/ListContext";

ReactDOM.render(
  <React.StrictMode>
    <ListContextProvider>
    <MovieContextProvider>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </MovieContextProvider>
    </ListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
