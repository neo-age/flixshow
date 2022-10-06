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
                const res = await axios.get(`http://localhost:4400/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                  {
                    headers: {
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmQ5OTM4M2E2MWZkNjA3NGNhNmM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjM1OTYwNywiZXhwIjoxNjg4Mjc5NjA3fQ.S4Py9ZZSuYFliJ6NDyCcbV_CuB7d5vjzkQg3o3GUxEY",
                    },
                  }
                );
                setLists(res.data)
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
            {lists.map((list, i)=>(
              <List list={list} key={i}/>
            ))}
            
        </div>
    );
}

export default Home;
