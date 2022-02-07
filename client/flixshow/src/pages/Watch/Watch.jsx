import './Watch.scss'
import {ArrowBack} from '@material-ui/icons';

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBack />
                Home
            </div>
            <video src="https://storage.coverr.co/videos/MueC7hjKPUClmEzMLNhPKnqKlOYwBHKo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQ0MDk0NTUwfQ.5uzikdVnyL5rc0HM-KXk8p7xXmvXtWKEXlL-EmnOv98" autoPlay={true} progress controls className="video"></video>
        </div>
    );
}

export default Watch;
