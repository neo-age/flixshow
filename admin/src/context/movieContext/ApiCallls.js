import axios from "axios";
import { 
  get_movie_start, 
  get_movie_success, 
  get_movie_failure, 
  delete_movie_start, 
  delete_movie_success, 
  delete_movie_failure, 
  create_show_start, 
  create_show_success, 
  create_show_failure,
  edit_show_start, 
  edit_show_success, 
  edit_show_failure
 } from "./MovieActions";


//get
export const getMovies = async (dispatch)=>{
    dispatch(get_movie_start())
    try{
        const res = await axios.get("movies", {
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(get_movie_success(res.data))
    }catch(err){
        dispatch(get_movie_failure(err))
    }
};

//create
export const createMovies = async (show, dispatch) => {
  dispatch(create_show_start());
  try {
    const res = await axios.post("movies/",show, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(create_show_success(res.data));
  } catch (err) {
    dispatch(create_show_failure());
  }
};

//edit
export const editContext = async (id, show, dispatch) => {
  dispatch(edit_show_start());
  try {
    
    const res = await axios.put(`movies/${id}`, show, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      }
    })
    console.log(res)
    dispatch(edit_show_success(res.data));
  } catch (err) {
    dispatch(edit_show_failure());
  }
};

//delete
export const deleteMovies = async (id, dispatch) => {
    dispatch(delete_movie_start());
    try {
      await axios.delete("movies/id/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(delete_movie_success(id));
    } catch (err) {
      dispatch(delete_movie_failure());
    }
  };