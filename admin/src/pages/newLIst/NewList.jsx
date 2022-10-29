import "./NewList.css";
import { useContext, useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { /*createMovies ,*/ getMovies } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createLists } from "../../context/listContext/ApiCallls";

export default function NewList() {
  const [list, setList] = useState(null)
  const navagate = useNavigate()
  
  const {dispatch} = useContext(ListContext)
  const {movie, dispatch: dispatchMovie} = useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])

  const handleChange = (e)=>{
    const value = e.target.value
    setList({ ...list, [e.target.name]:value})
  }

  const handleSelect = (e)=>{
    let value = Array.from(e.target.selectedOptions, (option)=>option.value)
    setList({ ...list, [e.target.name]:value})
    
  }
  
console.log(list)

  const handleSubmit = (e)=>{
    e.preventDefault();
    createLists(list, dispatch)
    navagate("/lists")
  }
  return (
    <div className="NewShow">
      <form className="addshowForm">
        <div className="addshowItem">
          <label>List title</label>
          <input type="text" placeholder="title..." name="title" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>List genre</label>
          <input type="text" placeholder="genre..." name="genre" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>List type</label>
          <select name="type" id="active" onChange={handleChange}>
            <option value="">Type</option>
            <option value="series">Series</option>
            <option value="movies">Movies</option>
          </select>
        </div>
        <div className="addshowItem">
          <label>List content</label>
          <select multiple name="content" id="active" onChange={handleSelect}>
            {movie.map(movie=>(
              <option key={movie._id} value={movie._id}>{movie.title}</option>
            ))}
          </select>
        </div>
        <div className="addshowItem">
            <label>Create button</label>
            <button className="create_show_Button" onClick={handleSubmit}>create new show</button>
        </div>
      </form>
    </div>
  );
}
