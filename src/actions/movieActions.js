export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE"

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const AddMovie = (x)=>{
    return({type: ADD_MOVIE, payload:{
            id: Date.now(),
            title: x.title,
            director: x.title,
            metascore: x.metascore,
            genre: x.genre,
            description: x.description 
    }});
}