import "./Featured.scss"
import {PlayArrow, InfoOutlined} from '@material-ui/icons';
import { useState, useEffect } from "react";
import axios from "axios";

const Featured = ({type}) => {
    const [contant, setContant] = useState({})

    useEffect(()=>{
        const getRandomshow = async ()=>{
            try {
                const res = await axios.get(`api/movies?type=${type}`,
                  {
                    headers: {
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU2NTI5NmI1NjI2ZWY0NjY1NmJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTg3OTY2OCwiZXhwIjoxNjUwMzExNjY4fQ.SC8GrfgU9qxf-CAdUaBGPX2Fg3gjn-65odjfu8ZtM8c",
                    },
                  }
                );
                console.log(res.data[0]);
                setContant(res.data[0])
              }catch(err){
                console.log(err);
            }
        }
        getRandomshow()
    },[type])
    console.log(contant);
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genra" id="genra">
                        <option>Genra</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img width="100%" src={contant.img} alt="" />
            <div className="info">
                <img src={contant.imgtitle} alt="" />
                <span className="desc">{contant.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
