import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    useEffect(()=>{
        const getRandomLists = async ()=>{
            try {
                const res = await axios.get(`api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                  {
                    headers: {
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU2NTI5NmI1NjI2ZWY0NjY1NmJjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjQxNTg2NywiZXhwIjoxNjQ2ODQ3ODY3fQ.WwmkFikaV1YOmT7bDmnnGxNZXNvyiKsgzy2IW-y6s3s",
                    },
                  }
                );
                console.log(res);
              }catch(err){
                console.log(err);
            }
        }
        getRandomLists()
    },[type, genre])
    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type}/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
}

export default Home;
