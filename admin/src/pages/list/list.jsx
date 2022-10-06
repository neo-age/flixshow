import { Link, useLocation, useNavigate } from "react-router-dom";
import "./list.css";
import { ListContext } from "../../context/listContext/ListContext";
import { useContext ,useState } from "react";
import { updatelist } from "../../context/listContext/ApiCallls";

export default function List() {
    const location = useLocation();
    const list = location.state;
    const navagate = useNavigate()
    const [editList, setEditList] = useState(list)

    const handleChange = (e)=>{
        const value = e.target.value
        setEditList({ ...editList, [e.target.name]:value})
      }

    const {dispatch} = useContext(ListContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        updatelist(editList ,dispatch)
        navagate("/lists")
      }

      console.log(editList);

  return (
    <div className="list">
      <div className="listTitleContainer">
        <h1 className="listTitle">{list.type}</h1>
        <Link to="/newlist">
          <button className="listAddButton">Create</button>
        </Link>
      </div>
      <div className="listTop">
          <div className="listTopRight">
              <div className="listInfoBottom">
                  <div className="listInfoItem">
                      <span className="listInfoKey">id:</span>
                      <span className="listInfoValue">{list._id}</span>
                  </div>
                  <div className="listInfoItem">
                      <span className="listInfoKey">title:</span>
                      <span className="listInfoValue">{list.title}</span>
                  </div>
                  <div className="listInfoItem">
                      <span className="listInfoKey">genre:</span>
                      <span className="listInfoValue">{list.genre}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="listBottom">
          <form className="listForm">
              <div className="listFormLeft">
                <label htmlFor="title">List Title</label>
                <input type="text" placeholder={list.title} name="title" onChange={handleChange}/>
                <label htmlFor="title">List Type</label>
                <input type="text" placeholder={list.type} name="title" onChange={handleChange}/>
                <label htmlFor="genre">List Genre</label>
                <input type="text" placeholder={list.genre} name="genre" onChange={handleChange}/>
              </div>
              <div className="listFormRight">
                  <button className="listButton" onClick={handleSubmit}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
