import axios from "axios";
import { Url } from "../../Urls";
import { 
  get_user_start, 
  get_user_success, 
  get_user_failure, 
  delete_user_start, 
  delete_user_success, 
  delete_user_failure, 
  create_user_start, 
  create_user_success, 
  create_user_failure,
  update_user_start, 
  update_user_success, 
  update_user_failure
 } from "./UserActions";


//get
export const getUsers = async (dispatch, user)=>{
  dispatch(get_user_start())
    try{
        const res = await axios.get(`${Url}/api/${user}/`, {
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
            },
        });
        dispatch(get_user_success(res.data))
    }catch(err){
        dispatch(get_user_failure(err))
    }
};

//create
export const createUsers = async (show, dispatch) => {
  dispatch(create_user_start());
  try {
    const res = await axios.post(`${Url}/api/users/`,show, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      },
    });
    dispatch(create_user_success(res.data));
  } catch (err) {
    dispatch(create_user_failure());
  }
};

//update
export const updateUsers = async (show, dispatch) => {
  dispatch(update_user_start());
  try {
    const res = await axios.put(`${Url}/api/users/id/${show._id}`,{
      ...show,
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      
    },});
    dispatch(update_user_success(res.data));
  } catch (err) {
    console.log(err)
    dispatch(update_user_failure());
  }
};

//delete
export const deleteUsers = async (id, dispatch, user) => {
    dispatch(delete_user_start());
    try {
      await axios.delete(`${Url}/api/${user}/id/${id}`, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
        },
      });
      dispatch(delete_user_success(id));
    } catch (err) {
      dispatch(delete_user_failure());
    }
  };