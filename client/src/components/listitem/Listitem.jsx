import "./Listitem.scss"
import {PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined} from '@material-ui/icons';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../../Urls";

const Listitem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        const getelementinfo = async ()=>{
            try {
                const res = await axios.get(`${url}/api/movies/id/${item}`,
                  {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                      },
                  }
                );
                setMovie(res.data)
              }catch(err){
                console.log(err);
            }
        }
        getelementinfo()
    },[item])

    return (
        
        <div 
            className='listitem'
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src={movie.img} alt="" />
            {isHovered && (
                <>
            <div className="listiteminfo">
                <div className="itemtrailer">
                <Link to='/watch' state={{movie: movie}}>
                    <video src={movie.trailer} autoPlay={true} loop />
                </Link>
                </div>
                <div className="iteminfo">
                <div className="itemicons_agelimit_year">
                    <div className="iteminfotop">
                        <span>{movie.duration+" min"}</span>
                        <span className="agelimit">+{movie.agelimit}</span>
                        <span>{movie.year}</span>
                    </div>
                    <div className="itemicons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                    </div>
                    
                </div>
                <div className="desc" >{movie.desc.substring(0, 150) } { movie.desc.length >= 150 && "..." }</div>
                <div className="genre">{"Genre: "+movie.genre}</div>
                </div>
            </div>
                </>
            )}
        </div>
        
    );
}

export default Listitem;
