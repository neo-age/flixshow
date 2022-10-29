// LOGIN ACTIONS

export const loginStart = () =>({
    type:"LOGIN_START",
});

export const loginSuccess = (admin) =>({
    type:"LOGIN_SUCCESS",
    payload:admin,
});

export const loginFailure = (err) =>({
    type:"LOGIN_FAILURE",
    payload:err,
});

// LOGOUT ACTIONS

export const logout = () =>({
    type:"LOGOUT",
});