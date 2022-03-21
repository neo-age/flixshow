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
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmQ5OTM4M2E2MWZkNjA3NGNhNmM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzE1NTkwMCwiZXhwIjoxNjQ3NTg3OTAwfQ.oFiLKJftow99c3gcCfkrg4MfoGNrC-PUnoK3AmKYwOc"
                    }
                  }
                );
                console.log(item);
                setMovie(res.data)
              }catch(err){
                console.log(err);
            }
        }
        getelementinfo()
    },[item])

    return (
        <Link to='/watch' state={{movie: movie}}>
        <div 
            className='listitem'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src={movie.img} alt="" />
            {isHovered && (
                <>
                <video src={movie.trailer} autoPlay={true} loop />
            <div className="iteminfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="iteminfotop">
                    <span>{movie.duration}</span>
                    <span className="agelimit">+{movie.agelimit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
            </div>
                </>
            )}
        </div>
        </Link>
    );
}

export default Listitem;
