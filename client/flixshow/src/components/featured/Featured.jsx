import "./Featured.scss"
import {PlayArrow, InfoOutlined} from '@material-ui/icons';

const Featured = ({type}) => {
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
            <img width="100%" src="https://images.unsplash.com/photo-1643191834226-ba266bf480bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <div className="info">
                <img src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" alt="" />
                <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae placeat accusamus, incidunt distinctio velit perspiciatis commodi delectus sequi sed natus qui explicabo quasi similique ratione iste reiciendis dolores molestias? Laboriosam!</span>
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
