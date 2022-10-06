//GET
export const get_list_start = () =>({
    type:"GET_LIST_START",
});

export const get_list_success = (lists) =>({
    type:"GET_LIST_SUCCESS",
    payload:lists,
});

export const get_list_failure = (err) =>({
    type:"GET_LIST_FAILURE",
    payload:err,
});


//CREATE
export const create_list_start = () =>({
    type:"CREATE_LIST_START",
});

export const create_list_success = (list) =>({
    type:"CREATE_LIST_SUCCESS",
    payload:list,
});

export const create_list_failure = (err) =>({
    type:"CREATE_LIST_FAILURE",
    payload:err,
});

//EDIT
export const update_list_start = () =>({
    type:"UPDATE_LIST_START",
});

export const update_list_success = (update_list) =>({
    type:"UPDATE_LIST_SUCCESS",
    payload:update_list,
});

export const update_list_failure = (err) =>({
    type:"UPDATE_LIST_FAILURE",
    payload:err,
});

//DELETE
export const delete_list_start = () =>({
    type:"DELETE_LIST_START",
});

export const delete_list_success = (id) =>({
    type:"DELETE_LIST_SUCCESS",
    payload:id,
});

export const delete_list_failure = (err) =>({
    type:"DELETE_LIST_FAILURE",
    payload:err,
});