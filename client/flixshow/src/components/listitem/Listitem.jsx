import "./Listitem.scss"
import {PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined} from '@material-ui/icons';
import { useState } from "react";

const Listitem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    return (
        <div 
            className='listitem'
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/86970/86523/The_Lego_Movie_final_style_buy_original_movie_posters_at_starstills__11358__13470.1394515783.jpg?c=2" alt="" />
            {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop muted/>
            <div className="iteminfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="iteminfotop">
                    <span>1 Hour 14 mins</span>
                    <span className="agelimit">+7</span>
                    <span>2016</span>
                </div>
                <div className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate fuga a iure quos nihil reiciendis ex quo in.
                </div>
                <div className="genre">action</div>
            </div>
                </>
            )}
        </div>
    );
}

export default Listitem;
