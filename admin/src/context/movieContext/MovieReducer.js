const MovieReducer = (state, action) =>{
    switch (action.type){
        case "GET_MOVIE_START" : 
            return {
                movie:[],
                isFetching:true,
                error:false,
            };
        case "GET_MOVIE_SUCCESS" : 
            return {
                movie:action.payload,
                isFetching:false,
                error:false,
            };
        case "GET_MOVIE_FAILURE" : 
            return {
                movie:[],
                isFetching:false,
                error:true,
            };


            case "CREATE_SHOW_START" : 
            return {
                ...state,
                isFetching:true,
                error:false,
            };
        case "CREATE_SHOW_SUCCESS" : 
            return {
                movie:[...state.movie, action.payload],
                isFetching:false,
                error:false,
            };
        case "CREATE_SHOW_FAILURE" : 
            return {
                ...state,
                isFetching:false,
                error:true,
            };


            case "UPDATE_SHOW_START" : 
            return {
                ...state,
                isFetching:true,
                error:false,
            };
        case "UPDATE_SHOW_SUCCESS" : 
            return {
                movie: state.movie.map(
                    (movie)=> movie._id === action.payload._id && action.payload
                ),
                isFetching:false,
                error:false,
            };
        case "UPDATE_SHOW_FAILURE" : 
            return {
                ...state,
                isFetching:false,
                error:true,
            };


        case "DELETE_MOVIE_START" : 
            return {
                ...state,
                isFetching:true,
                error:false,
            };
        case "DELETE_MOVIE_SUCCESS" : 
            return {
                movie:state.movie.filter((movie)=> movie._id !== action.payload),
                isFetching:false,
                error:false,
            };
        case "DELETE_MOVIE_FAILURE" : 
            return {
                ...state,
                isFetching:false,
                error:true,
            };
        default:
            return {...state}
    }
}

export default MovieReducer