import "./Listitem.scss"
import {PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined} from '@material-ui/icons';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Listitem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        const getelementinfo = async ()=>{
            try {
                const res = await axios.get("api/movies/id/"+item,
                  {
                    headers: {
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmQ5OTM4M2E2MWZkNjA3NGNhNmM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTEwNjcwNCwiZXhwIjoxNjg1MDI2NzA0fQ.MMUlE01JvFUGm-XbhqsQWqu4liqk2XFVNLp8YGh8-iI"
                    }
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
