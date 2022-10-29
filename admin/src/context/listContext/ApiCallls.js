import axios from "axios";
import { Url } from "../../Urls";
import { 
  get_list_start, 
  get_list_success, 
  get_list_failure, 
  delete_list_start, 
  delete_list_success, 
  delete_list_failure, 
  create_list_start, 
  create_list_success, 
  create_list_failure,
  update_list_start, 
  update_list_success, 
  update_list_failure
 } from "./ListActions";


//get
export const getLists = async (dispatch)=>{
    dispatch(get_list_start())
    try{
        const res = await axios.get(`${Url}/api/lists/`, {
            headers:{
                token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
            },
        });
        dispatch(get_list_success(res.data))
    }catch(err){
        dispatch(get_list_failure(err))
    }
};

//create
export const createLists = async (list, dispatch) => {
  dispatch(create_list_start());
  try {
    const res = await axios.post(`${Url}/api/lists/`,list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      },
    });
    dispatch(create_list_success(res.data));
  } catch (err) {
    dispatch(create_list_failure());
  }
};

//update
export const updatelist = async (list, dispatch) => {
  dispatch(update_list_start());
  try {
    const res = await axios.put(`${Url}/api/lists/id/${list._id}`,{
      ...list,
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
      
    },});
    dispatch(update_list_success(res.data));
  } catch (err) {
    console.log(err)
    dispatch(update_list_failure());
  }
};

//delete
export const deleteLists = async (id, dispatch) => {
    dispatch(delete_list_start());
    try {
      await axios.delete(`${Url}/api/lists/id/${id}`, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("admin")).accessToken,
        },
      });
      dispatch(delete_list_success(id));
    } catch (err) {
      dispatch(delete_list_failure());
    }
  };