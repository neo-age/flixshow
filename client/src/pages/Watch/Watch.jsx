import './Watch.scss'
import {ArrowBack} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
    const location = useLocation()
    const show = location.state.movie
    //console.log(location.state.movie);
    return (
        <div className='watch'>
            <Link to="/">
            <div className="back">
                <ArrowBack />
                Home
            </div>
            </Link>
            <video src={show.video} autoPlay={true} progress controls className="video" width="pixels"></video>
        </div>
    );
}

export default Watch;
