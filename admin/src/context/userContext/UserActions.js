//GET
export const get_user_start = () =>({
    type:"GET_USER_START",
});

export const get_user_success = (users) =>({
    type:"GET_USER_SUCCESS",
    payload:users,
});

export const get_user_failure = (err) =>({
    type:"GET_USER_FAILURE",
    payload:err,
});


//CREATE
export const create_user_start = () =>({
    type:"CREATE_USER_START",
});

export const create_user_success = (user) =>({
    type:"CREATE_USER_SUCCESS",
    payload:user,
});

export const create_user_failure = (err) =>({
    type:"CREATE_USER_FAILURE",
    payload:err,
});

//EDIT
export const update_user_start = () =>({
    type:"UPDATE_USER_START",
});

export const update_user_success = (updateuser) =>({
    type:"UPDATE_USER_SUCCESS",
    payload:updateuser,
});

export const update_user_failure = (err) =>({
    type:"UPDATE_USER_FAILURE",
    payload:err,
});

//DELETE
export const delete_user_start = () =>({
    type:"DELETE_USER_START",
});

export const delete_user_success = (id) =>({
    type:"DELETE_USER_SUCCESS",
    payload:id,
});

export const delete_user_failure = (err) =>({
    type:"DELETE_USER_FAILURE",
    payload:err,
});