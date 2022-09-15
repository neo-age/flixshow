import "./List.scss"
import {ArrowForwardIos} from '@material-ui/icons';
import Listitem from "../listitem/Listitem";  
import { useRef, useState } from "react";

const List = ({list}) => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction)=>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }else if (direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='list'>
            <span className="listtitle">{list.title}</span>
            <div className="wrapper">
                <ArrowForwardIos className="sliderarrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                    {list.content.map((item, i)=>(
                        <Listitem index={i} key={i} item={item}/>
                    ))}
                    
                </div>
                <ArrowForwardIos className="sliderarrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    );
}

export default List;
