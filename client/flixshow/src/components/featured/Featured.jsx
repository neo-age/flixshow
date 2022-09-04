import "./Featured.scss"
import { PlayArrow, InfoOutlined } from '@material-ui/icons';
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
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmQ5OTM4M2E2MWZkNjA3NGNhNmM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjA3MDI2MiwiZXhwIjoxNjg3OTkwMjYyfQ.oflhuwyOtix4ZXVfljMIVKYeBXmH9PXcrVi5mgEz7jI",
                    },
                  }
                );
                setContant(res.data[0])
              }catch(err){
                console.log(err);
            }
        }
        getRandomshow()
    },[type])
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
            
            <img src={contant.img} alt="" />
            <div className="info">
                <img src={contant.imgtitle} alt="" />
                <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
