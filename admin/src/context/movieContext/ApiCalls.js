import axios from "axios";
import { Url } from "../../Urls";
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
  update_show_start, 
  update_show_success, 
  update_show_failure
 } from "./MovieActions";


//get
export const getMovies = async (dispatch)=>{
    dispatch(get_movie_start())
    try{
        const res = await axios.get(`${Url}/api/movies/`, {
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
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
    const res = await axios.post(`${Url}/api/movies/`,show, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      },
    });
    dispatch(create_show_success(res.data));
  } catch (err) {
    dispatch(create_show_failure());
  }
};

//update
export const updateMovies = async (show, dispatch) => {
  dispatch(update_show_start());
  try {
    const res = await axios.put(`${Url}/api/movies/id/${show._id}`,{
      ...show,
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      
    },});
    dispatch(update_show_success(res.data));
  } catch (err) {
    console.log(err)
    dispatch(update_show_failure());
  }
};

//delete
export const deleteMovies = async (id, dispatch) => {
    dispatch(delete_movie_start());
    try {
      await axios.delete(`${Url}/api/movies/id/${id}`, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
        },
      });
      dispatch(delete_movie_success(id));
    } catch (err) {
      dispatch(delete_movie_failure());
    }
  };