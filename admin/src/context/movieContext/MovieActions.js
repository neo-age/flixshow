//GET
export const get_movie_start = () =>({
    type:"GET_MOVIE_START",
});

export const get_movie_success = (movies) =>({
    type:"GET_MOVIE_SUCCESS",
    payload:movies,
});

export const get_movie_failure = (err) =>({
    type:"GET_MOVIE_FAILURE",
    payload:err,
});


//CREATE
export const create_show_start = () =>({
    type:"CREATE_SHOW_START",
});

export const create_show_success = (show) =>({
    type:"CREATE_SHOW_SUCCESS",
    payload:show,
});

export const create_show_failure = (err) =>({
    type:"CREATE_SHOW_FAILURE",
    payload:err,
});

//EDIT
export const edit_show_start = () =>({
    type:"EDIT_SHOW_START",
});

export const edit_show_success = (editshow) =>({
    type:"EDIT_SHOW_SUCCESS",
    payload:editshow,
});

export const edit_show_failure = (err) =>({
    type:"EDIT_SHOW_FAILURE",
    payload:err,
});

//DELETE
export const delete_movie_start = () =>({
    type:"DELETE_MOVIE_START",
});

export const delete_movie_success = (id) =>({
    type:"DELETE_MOVIE_SUCCESS",
    payload:id,
});

export const delete_movie_failure = (err) =>({
    type:"DELETE_MOVIE_FAILURE",
    payload:err,
});