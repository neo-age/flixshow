import { Link, useLocation } from "react-router-dom";
import "./show.css";
import { Publish } from "@material-ui/icons";
import { updateMovies } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { useContext ,useState } from "react";

export default function Show() {
    const location = useLocation();
    const show = location.state;
    const [editshow, setEditshow] = useState(show)

    const handleChange = (e)=>{
        const value = e.target.value
        setEditshow({ ...editshow, [e.target.name]:value})
      }

    const {dispatch} = useContext(MovieContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        updateMovies(editshow ,dispatch)
      }

      console.log(editshow);

  return (
    <div className="show">
      <div className="showTitleContainer">
        <h1 className="showTitle">{show.type}</h1>
        <Link to="/newshow">
          <button className="showAddButton">Create</button>
        </Link>
      </div>
      <div className="showTop">
          <div className="showTopRight">
              <div className="showInfoTop">
                  <img src={show.img} alt="" className="showInfoImg" />
              </div>
              <div className="showInfoBottom">
                  <div className="showInfoItem">
                      <span className="showInfoKey">title:</span>
                      <span className="showInfoValue">{show.title}</span>
                  </div>
                  <div className="showInfoItem">
                      <span className="showInfoKey">duration: </span>
                      <span className="showInfoValue">{show.duration}h</span>
                  </div>
                  <div className="showInfoItem">
                      <span className="showInfoKey">age:</span>
                      <span className="showInfoValue">{show.agelimit}</span>
                  </div>
                  <div className="showInfoItem">
                      <span className="showInfoKey">genre:</span>
                      <span className="showInfoValue">{show.genre}</span>
                  </div>
                  <div className="showInfoItem">
                      <span className="showInfoKey">release date:</span>
                      <span className="showInfoValue">{show.year}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="showBottom">
          <form className="showForm">
              <div className="showFormLeft">
                <label htmlFor="title">{show.type} Title</label>
                <input type="text" placeholder={show.title} name="title" onChange={handleChange}/>
                <label htmlFor="desc">descraption</label>
                <input type="text" placeholder="show descraption" name="desc" onChange={handleChange}/>
                <label htmlFor="year">Year</label>
                <input type="text" placeholder={show.year} name="year" onChange={handleChange}/>
                <label htmlFor="genre">Genre</label>
                <input type="text" placeholder={show.genre} name="genre" onChange={handleChange}/>
                <label htmlFor="agelimit">Limit</label>
                <input type="text" placeholder={show.agelimit} name="agelimit" onChange={handleChange}/>
                <label htmlFor="trailer">Trailer</label>
                <input type="text" placeholder={show.trailer} name="trailer" onChange={handleChange}/>
                <label htmlFor="video">Video</label>
                <input type="text" placeholder={show.video} name="video" onChange={handleChange}/>
              </div>
              <div className="showFormRight">
                  <div className="showUpload">
                      <img src={show.img} alt="" className="showUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="showButton" onClick={handleSubmit}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
